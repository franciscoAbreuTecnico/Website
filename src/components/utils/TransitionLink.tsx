"use client";
import Link from "next/link";
import React, { ComponentProps, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { withBasePath } from "../../utils/basePath";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

interface TransitionLinkProps extends ComponentProps<typeof Link> {
  children: ReactNode;
  href: string;
}

export const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  const router = useRouter();
  const targetHref = withBasePath(href);

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(450);

    router.push(targetHref);

    await sleep(450);

    body?.classList.remove("page-transition");
  };

  return (
    <Link onClick={handleTransition} href={targetHref} {...props}>
      {children}
    </Link>
  );
};
