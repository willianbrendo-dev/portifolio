"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { ProjectMedia, ProjectMediaAsset } from "@/data/portfolio";

const desktopMediaQuery = "(min-width: 900px)";

function subscribeToDesktopMedia(callback: () => void) {
  const mediaQuery = window.matchMedia(desktopMediaQuery);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getDesktopMediaSnapshot() {
  return window.matchMedia(desktopMediaQuery).matches;
}

function getServerDesktopMediaSnapshot() {
  return false;
}

export function ProductView({ media }: { media: ProjectMedia }) {
  const [dashboard, booking, agenda] = media.mobile;
  const [selectedAsset, setSelectedAsset] = useState<ProjectMediaAsset | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const showDesktopMedia = useSyncExternalStore(
    subscribeToDesktopMedia,
    getDesktopMediaSnapshot,
    getServerDesktopMediaSnapshot,
  );

  const editorialShots = [
    {
      asset: dashboard,
      index: "01",
      description: "Visão operacional",
      className: "product-shot-dashboard",
    },
    {
      asset: agenda,
      index: "02",
      description: "Atendimentos do dia",
      className: "product-shot-agenda",
    },
    {
      asset: booking,
      index: "03",
      description: "Experiência do cliente",
      className: "product-shot-booking",
    },
  ];

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !selectedAsset) return;

    const handleClose = () => {
      setSelectedAsset(null);
      triggerRef.current?.focus();
    };

    dialog.addEventListener("close", handleClose);
    dialog.showModal();
    closeButtonRef.current?.focus();

    return () => {
      dialog.removeEventListener("close", handleClose);
      if (dialog.open) dialog.close();
    };
  }, [selectedAsset]);

  function openLightbox(asset: ProjectMediaAsset, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelectedAsset(asset);
  }

  function closeLightbox() {
    dialogRef.current?.close();
  }

  function renderShot({
    asset,
    index,
    description,
    className,
  }: (typeof editorialShots)[number]) {
    return (
      <figure className={`product-shot ${className}`} key={asset.src}>
        <button
          className="product-shot-trigger"
          type="button"
          aria-label={`Ampliar ${asset.label}: ${asset.caption}`}
          onClick={(event) => openLightbox(asset, event.currentTarget)}
        >
          <span className="product-shot-surface">
            <Image
              src={asset.src}
              alt={asset.alt}
              width={asset.width}
              height={asset.height}
              sizes="(max-width: 319px) calc(100vw - 3rem), (max-width: 700px) 45vw, (max-width: 1100px) 42vw, 28vw"
            />
          </span>
        </button>
        <figcaption>
          <span>{index}</span>
          <span>
            <strong>{asset.label}</strong>
            <small>{description}</small>
          </span>
        </figcaption>
      </figure>
    );
  }

  return (
    <>
      <section className="product-view" aria-labelledby={`${media.id}-title`}>
        <header className="product-view-header">
          <div>
            <p className="product-view-kicker">REAL PRODUCT VIEW</p>
            <p className="product-view-demo-label">DADOS DEMONSTRATIVOS</p>
            <h4 id={`${media.id}-title`}>{media.title}</h4>
          </div>
          <div className="product-view-meta">
            <span>{media.coordinate}</span>
            <p>{media.note}</p>
          </div>
        </header>

        <div
          className="product-media-grid"
          role="group"
          aria-label={`Telas mobile de ${media.projectName}`}
        >
          {editorialShots.map(renderShot)}
        </div>

        {showDesktopMedia ? (
          <figure className="product-view-desktop">
            <figcaption>
              <span>{media.desktop.label}</span>
              <p>{media.desktop.caption}</p>
            </figcaption>
            <div className="product-view-desktop-crop">
              <Image
                src={media.desktop.src}
                alt={media.desktop.alt}
                width={media.desktop.width}
                height={media.desktop.height}
                sizes="(max-width: 1100px) 84vw, 60rem"
              />
            </div>
          </figure>
        ) : (
          <div className="product-view-wide-note">
            <span>WEB / RESPONSIVE</span>
            <p>Experiência também adaptada para viewport ampla.</p>
          </div>
        )}
      </section>

      <dialog
        className="product-lightbox"
        ref={dialogRef}
        aria-labelledby={`${media.id}-lightbox-title`}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeLightbox();
        }}
      >
        {selectedAsset ? (
          <div className="product-lightbox-content">
            <div className="product-lightbox-bar">
              <p id={`${media.id}-lightbox-title`}>{selectedAsset.label}</p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                aria-label="Fechar imagem ampliada"
              >
                Fechar <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="product-lightbox-media">
              <Image
                src={selectedAsset.src}
                alt={selectedAsset.alt}
                width={selectedAsset.width}
                height={selectedAsset.height}
                sizes="min(92vw, 52rem)"
              />
            </div>
            <p>{selectedAsset.caption}</p>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
