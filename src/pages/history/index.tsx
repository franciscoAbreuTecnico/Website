import { useEffect } from "react";
import { useRouter } from "next/router";
import { timelineData } from "@/src/components/textContent/TimelineSectionTexts";
import { resolveInternalHref } from "../../utils/useInternalHref";

export default function HistoryIndex() {
  const router = useRouter();
  const years = Object.keys(timelineData)
    .map(String)
    .sort((a, b) => Number(a) - Number(b));

  useEffect(() => {
    const latestYear = years[years.length - 1];

    if (!latestYear) {
      return;
    }

    const { href, isFileProtocol } = resolveInternalHref(`/history/${latestYear}`);

    if (isFileProtocol) {
      window.location.href = href;
      return;
    }

    router.replace(href);
  }, [years, router]);

  return null;
}
