import { useEffect } from "react";
import { useRouter } from "next/router";
import { timelineData } from "@/src/components/textContent/TimelineSectionTexts";

export default function HistoryIndex() {
  const router = useRouter();
  const years = Object.keys(timelineData)
    .map(String)
    .sort((a, b) => Number(a) - Number(b));

  useEffect(() => {
    if (years.length > 0) {
      router.replace(`/history/${years[years.length - 1] || years[0]}`); // Redirect to the latest year
    }
  }, [years, router]);

  return;
}
