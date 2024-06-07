import { useEffect, useState } from "react";

export const useActiveId = (): string => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("h2, h3");
      let currentId = activeId;
      let minTop = Number.POSITIVE_INFINITY;

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 0 && rect.top < minTop) {
          if (heading.id === "") return;
          currentId = heading.id;
          minTop = rect.top;
        }
      });

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeId]);

  return activeId;
};
