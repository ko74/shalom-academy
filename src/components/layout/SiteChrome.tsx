"use client";

import { Header } from "@/components/layout/Header";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { NewsEventsCanvas } from "@/components/layout/NewsEventsCanvas";
import { StickyCta } from "@/components/layout/StickyCta";
import { useChrome } from "@/components/layout/ChromeProvider";

export function SiteChrome() {
  const { overlay, close } = useChrome();

  return (
    <>
      <Header />
      <MegaMenu open={overlay === "menu"} onClose={close} />
      <SearchOverlay open={overlay === "search"} onClose={close} />
      <NewsEventsCanvas open={overlay === "news"} onClose={close} />
      <StickyCta />
    </>
  );
}
