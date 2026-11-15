"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Mail from "./Mail";
import styles from "./page.module.css";

const viewports = [
  { label: "Escritorio", width: 700 },
  { label: "Mobile", width: 390 },
  { label: "Mobile chico", width: 320 },
];

const frameDoc = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;background:#111111"></body></html>`;

function MailFrame({ width, children }: { width: number; children: ReactNode }) {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  return (
    <iframe
      title="Vista previa del mail"
      srcDoc={frameDoc}
      className={styles.frame}
      style={{ width }}
      onLoad={(event) =>
        setMountNode(event.currentTarget.contentDocument?.body ?? null)
      }
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}

export default function MailPromoPage() {
  const [siteUrl, setSiteUrl] = useState("");
  const [width, setWidth] = useState(viewports[0].width);

  // Así las imágenes y fuentes se cargan desde tu servidor local
  useEffect(() => {
    setSiteUrl(window.location.origin);
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.toolbar}>
        {viewports.map((viewport) => (
          <button
            key={viewport.width}
            type="button"
            className={viewport.width === width ? styles.active : undefined}
            onClick={() => setWidth(viewport.width)}
          >
            {viewport.label} · {viewport.width}px
          </button>
        ))}
      </div>

      <div className={styles.stage}>
        {siteUrl && (
          <MailFrame width={width}>
            <Mail siteUrl={siteUrl} />
          </MailFrame>
        )}
      </div>
    </main>
  );
}