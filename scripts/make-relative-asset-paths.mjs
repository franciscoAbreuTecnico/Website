#!/usr/bin/env node
import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';

const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const normalizedBasePath = rawBasePath.replace(/^\/+|\/+$/g, '');
const basePathPrefix = normalizedBasePath ? `/${normalizedBasePath}` : '';

const OUT_DIR = resolve(process.cwd(), process.argv[2] ?? 'out');

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectHtmlFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function withTrailingSlash(path) {
  if (path === '.') {
    return './';
  }

  return path.endsWith('/') ? path : `${path}/`;
}

function normalizeRelativePath(path) {
  if (!path) {
    return '.';
  }

  return path.split(sep).join('/');
}

function rewriteToRelative(content, basePrefix) {
  let result = content;
  if (basePathPrefix) {
    const baseWithSlash = `${basePathPrefix}/`;
    const escapedBaseWithSlash = escapeRegex(baseWithSlash);
    result = result.replace(
      new RegExp(`(["'=,(])${escapedBaseWithSlash}`, 'g'),
      (_, start) => `${start}/`,
    );
  }
  const directoryPrefixes = ['_next/', 'images/', 'local-fonts/', 'videos/', 'icons/', 'fonts/'];
  const fileTargets = ['favicon.ico', 'manifest.webmanifest'];

  for (const prefix of directoryPrefixes) {
    const escaped = escapeRegex(prefix);
    const attrPattern = new RegExp(`(["'=])\/${escaped}`, 'g');
    const commaPattern = new RegExp(`(,\s*)\/${escaped}`, 'g');
    const jsonPattern = new RegExp(`(["'])\/${escaped}`, 'g');

    result = result.replace(attrPattern, (_, start) => `${start}${basePrefix}${prefix}`);
    result = result.replace(commaPattern, (_, start) => `${start}${basePrefix}${prefix}`);
    result = result.replace(jsonPattern, (_, quote) => `${quote}${basePrefix}${prefix}`);
  }

  for (const file of fileTargets) {
    const escaped = escapeRegex(file);
    const attrPattern = new RegExp(`(["'=])\/${escaped}`, 'g');
    result = result.replace(attrPattern, (_, start) => `${start}${basePrefix}${file}`);
  }

  result = result.replace(
    /(href=|src=|content=|data-src=|data-href=|poster=|data-poster=)(['"])\/(?!\/)/g,
    (_, attr, quote) => `${attr}${quote}${basePrefix}`,
  );

  result = result.replace(/url\((['"]?)\/(?!\/)/g, (_, quote) => `url(${quote}${basePrefix}`);
  const escapedBasePrefix = escapeRegex(basePrefix);
  result = result.replace(new RegExp(`(href=['"])${escapedBasePrefix}#`, 'g'), '$1#');

  result = result.replace(/(href=(['"]))(\.{1,2}\/[^'"#?]*[^'"#]*)(['"])/g, (match, start, quote, value, end) => {
    if (!value) {
      return match;
    }

    const withoutLeading = value.replace(/^(\.\/|\.\.\/)+/, '');

    if (!withoutLeading) {
      return `${start}${appendIndexHtml(value)}${end}`;
    }

    const blockedPrefixes = ['_next/', 'images/', 'local-fonts/', 'videos/', 'icons/', 'fonts/'];
    const blockedFiles = ['favicon.ico', 'manifest.webmanifest'];

    if (blockedPrefixes.some(prefix => withoutLeading.startsWith(prefix))) {
      return match;
    }

    if (blockedFiles.some(file => withoutLeading.startsWith(file))) {
      return match;
    }

    return `${start}${appendIndexHtml(value)}${end}`;
  });

  return result;
}

function appendIndexHtml(value) {
  const [pathWithQuery, hash = ''] = value.split('#', 2);
  const [path, query = ''] = pathWithQuery.split('?', 2);

  if (!path || /\.[^/]+$/.test(path)) {
    return `${path}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`;
  }

  const normalizedPath = path.endsWith('/') ? path : `${path}/`;
  const querySuffix = query ? `?${query}` : '';
  const hashSuffix = hash ? `#${hash}` : '';

  return `${normalizedPath}index.html${querySuffix}${hashSuffix}`;
}

async function main() {
  let directoryStats;

  try {
    directoryStats = await stat(OUT_DIR);
  } catch (error) {
    console.error(`Cannot find the export directory at ${OUT_DIR}. Run \`npm run build\` before this script.`);
    process.exitCode = 1;
    return;
  }

  if (!directoryStats.isDirectory()) {
    console.error(`Expected ${OUT_DIR} to be a directory with exported HTML.`);
    process.exitCode = 1;
    return;
  }

  const htmlFiles = await collectHtmlFiles(OUT_DIR);

  if (htmlFiles.length === 0) {
    console.warn('No HTML files were found in the export directory.');
    return;
  }

  let changed = 0;

  for (const file of htmlFiles) {
    const original = await readFile(file, 'utf8');
    const fileDir = dirname(file);
    const relativeToOut = normalizeRelativePath(relative(fileDir, OUT_DIR));
    const basePrefix = withTrailingSlash(relativeToOut);
    const rewritten = rewriteToRelative(original, basePrefix);

    if (original !== rewritten) {
      await writeFile(file, rewritten);
      changed += 1;
      console.log(`Rewrote asset URLs in ${relative(process.cwd(), file)}`);
    }
  }

  if (changed === 0) {
    console.log('No changes were required — asset URLs already looked relative.');
  } else {
    console.log(`Updated ${changed} HTML file${changed === 1 ? '' : 's'} with relative asset URLs.`);
  }
}

await main();