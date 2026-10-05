import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import scdswHtml from "../../public/scdsw.html?raw";

export const Route = createFileRoute("/")({
  ssr: false,
  component: ScdswHost,
});

function ScdswHost() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = host.current;
    if (!node) return;
    const added: HTMLElement[] = [];
    (window as unknown as { L: typeof L }).L = L;

    const parsed = new DOMParser().parseFromString(scdswHtml, "text/html");
    parsed.querySelectorAll("link[rel='stylesheet'], style").forEach((source) => {
      const clone = source.cloneNode(true) as HTMLElement;
      clone.setAttribute("data-scdsw", "1");
      document.head.appendChild(clone);
      added.push(clone);
    });
    const scripts = [...parsed.querySelectorAll("script")];
    scripts.forEach((script) => script.remove());
    node.replaceChildren(...parsed.body.childNodes);
    for (const old of scripts) {
      if (old.src.includes("leaflet")) continue;
      const script = document.createElement("script");
      script.setAttribute("data-scdsw", "1");
      script.text = old.text;
      document.body.appendChild(script);
      added.push(script);
    }

    return () => {
      (window as unknown as { SCDSW?: { destroy?: () => void } }).SCDSW?.destroy?.();
      added.forEach((el) => el.remove());
      node.replaceChildren();
    };
  }, []);

  return (
    <div ref={host} id="scdsw-host">
      <p style={{ margin: 24, fontFamily: "Inter, system-ui, sans-serif", color: "#075985" }}>
        Memuat peta Semarang...
      </p>
    </div>
  );
}