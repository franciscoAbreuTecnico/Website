'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  const handleTransition = async e => {
    e.preventDefault();

    const body = document.querySelector('body');

    body?.classList.add('page-transition');

    await sleep(450);

    router.push(href);

    await sleep(450);

    body?.classList.remove('page-transition');
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};
