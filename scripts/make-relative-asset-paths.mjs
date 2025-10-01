#!/usr/bin/env node
import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';

const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

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

function rewriteToRelative(content) {
  let result = content;
  const directoryPrefixes = ['_next/', 'images/', 'local-fonts/', 'videos/', 'icons/', 'fonts/'];
  const fileTargets = ['favicon.ico', 'manifest.webmanifest'];

  for (const prefix of directoryPrefixes) {
    const escaped = escapeRegex(prefix);
    const attrPattern = new RegExp(`(["'=])\/${escaped}`, 'g');
    const commaPattern = new RegExp(`(,\s*)\/${escaped}`, 'g');
    const jsonPattern = new RegExp(`(["'])\/${escaped}`, 'g');

    result = result.replace(attrPattern, (_, start) => `${start}./${prefix}`);
    result = result.replace(commaPattern, (_, start) => `${start}./${prefix}`);
    result = result.replace(jsonPattern, (_, quote) => `${quote}./${prefix}`);
  }

  for (const file of fileTargets) {
    const escaped = escapeRegex(file);
    const attrPattern = new RegExp(`(["'=])\/${escaped}`, 'g');
    result = result.replace(attrPattern, (_, start) => `${start}./${file}`);
  }

  result = result.replace(
    /(href=|src=|content=|data-src=|data-href=|poster=|data-poster=)(['"])\/(?!\/)/g,
    (_, attr, quote) => `${attr}${quote}./`,
  );

  result = result.replace(/url\((['"]?)\/(?!\/)/g, (_, quote) => `url(${quote}./`);
  result = result.replace(/(href=['"])\.\/\#/g, '$1#');

  return result;
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
    const rewritten = rewriteToRelative(original);

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