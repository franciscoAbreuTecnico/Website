const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const normalized = rawBasePath.replace(/^\/+|\/+$/g, '');

export const basePath = normalized ? `/${normalized}` : '';

const basePathWithTrailingSlash = basePath ? `${basePath}/` : basePath;
const ABSOLUTE_PATTERN = /^(?:[a-zA-Z][a-zA-Z\d+\-.]*:|\/\/)/;

export function withBasePath(path: string) {
  if (!path) {
    return basePath || '/';
  }

  if (ABSOLUTE_PATTERN.test(path) || path.startsWith('#')) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (basePath && normalizedPath.startsWith(basePathWithTrailingSlash)) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}
