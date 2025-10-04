'use client';

import { useEffect, useState } from 'react';
import { withBasePath } from './basePath';

const EXPORT_DIR = process.env.NEXT_PUBLIC_EXPORT_DIR ?? 'out';
const EXPORT_SEGMENT = `/${EXPORT_DIR}/`;

interface HrefState {
  href: string;
  isFileProtocol: boolean;
}

function normalizePath(path: string) {
  if (!path) {
    return '/';
  }

  if (path.startsWith('#')) {
    return path;
  }

  return path.startsWith('/') ? path : `/${path}`;
}

function splitPathQueryHash(value: string) {
  let path = value;
  let query = '';
  let hash = '';

  const hashIndex = path.indexOf('#');

  if (hashIndex !== -1) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  const queryIndex = path.indexOf('?');

  if (queryIndex !== -1) {
    query = path.slice(queryIndex);
    path = path.slice(0, queryIndex);
  }

  return { path, query, hash };
}

function computeFileHref(normalizedPath: string) {
  if (typeof window === 'undefined') {
    return normalizedPath;
  }

  if (normalizedPath.startsWith('#')) {
    return normalizedPath;
  }

  const { pathname } = window.location;
  const exportIndex = pathname.indexOf(EXPORT_SEGMENT);

  if (exportIndex === -1) {
    return normalizedPath;
  }

  const afterExport = pathname.slice(exportIndex + EXPORT_SEGMENT.length);
  const currentParts = afterExport.split('/').filter(Boolean);

  if (currentParts.length > 0 && currentParts[currentParts.length - 1].endsWith('.html')) {
    currentParts.pop();
  }

  const depth = currentParts.length;
  const { path, query, hash } = splitPathQueryHash(normalizedPath.replace(/^\/+/, ''));
  const segments = path.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  const shouldAppendIndex =
    path === '' ||
    path.endsWith('/') ||
    typeof lastSegment === 'undefined' ||
    !lastSegment.includes('.');

  let relative = depth === 0 ? './' : '../'.repeat(depth);

  if (segments.length > 0) {
    if (!relative.endsWith('/')) {
      relative += '/';
    }

    relative += segments.join('/');
  }

  if (shouldAppendIndex) {
    if (!relative.endsWith('/')) {
      relative += '/';
    }

    relative += 'index.html';
  }

  return `${relative}${query}${hash}`;
}

export function useInternalHref(path: string): HrefState {
  const normalizedPath = normalizePath(path);
  const [state, setState] = useState<HrefState>(() => ({
    href: withBasePath(normalizedPath),
    isFileProtocol: false,
  }));

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.location.protocol === 'file:') {
      setState({
        href: computeFileHref(normalizedPath),
        isFileProtocol: true,
      });
      return;
    }

    setState({
      href: withBasePath(normalizedPath),
      isFileProtocol: false,
    });
  }, [normalizedPath]);

  return state;
}
