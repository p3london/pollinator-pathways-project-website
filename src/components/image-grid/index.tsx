"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import s from "./style.module.css";
import clsx from "clsx";

export type ImageGridImage = { src: string; caption?: string | null };

export function ImageGrid({
  images,
}: {
  images: (ImageGridImage | null | undefined)[];
}) {
  const [lightboxImageIdx, setLightboxImageIdx] = useState(-1);
  const closeLightbox = () => setLightboxImageIdx(-1);

  const validImages = images.filter((image): image is ImageGridImage =>
    Boolean(image?.src)
  );
  const imageCount = validImages.length;

  const lightboxNext = useCallback(() => {
    setLightboxImageIdx((currentIdx) =>
      Math.min(currentIdx + 1, validImages.length - 1)
    );
  }, [validImages.length]);
  const lightboxPrev = useCallback(() => {
    setLightboxImageIdx((currentIdx) => Math.max(currentIdx - 1, 0));
  }, []);

  /**
   * Listen for escape and arrow keys.
   * On escape key, close lightbox.
   * On arrow keys, navigate lightbox images, but
   * only if the lightbox is open.
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImageIdx < 0) {
        return;
      }
      if (e.key === "Escape") {
        closeLightbox();
      }
      if (e.key === "ArrowLeft") {
        lightboxPrev();
      } else if (e.key === "ArrowRight") {
        lightboxNext();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImageIdx, lightboxPrev, lightboxNext]);

  /**
   * Block page scrolling while the lightbox is open.
   */
  const isLightboxOpen = lightboxImageIdx >= 0;
  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }
    const { style } = document.documentElement;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = previousOverflow;
    };
  }, [isLightboxOpen]);

  if (imageCount === 0) return null;

  const lightboxImage = validImages[lightboxImageIdx];

  return (
    <>
      <div className={s.photoGridRoot}>
        {validImages.map((image, idx) => {
          return (
            <div className={s.photoGridItem} key={idx}>
              <img
                className={s.image}
                src={image.src}
                alt={image.caption ?? ""}
                onClick={() => setLightboxImageIdx(idx)}
              />
            </div>
          );
        })}
      </div>

      {lightboxImage && (
        <ModalPortal>
          <div className={s.lightbox}>
            <figure className={s.lightboxFigure}>
              <img
                className={clsx(s.lightboxImage)}
                src={lightboxImage.src}
                alt={lightboxImage.caption ?? ""}
              />
              {lightboxImage.caption ? (
                <figcaption className={s.lightboxCaption}>
                  {lightboxImage.caption}
                </figcaption>
              ) : null}
            </figure>
            <button
              className={clsx(s.lightboxButton, s.lightboxClose)}
              onClick={closeLightbox}
            >
              <span aria-hidden>×</span>
            </button>
            {lightboxImageIdx > 0 ? (
              <button
                className={clsx(s.lightboxButton, s.lightboxPrev)}
                onClick={lightboxPrev}
              >
                <span aria-hidden>←</span>
              </button>
            ) : null}
            {lightboxImageIdx < imageCount - 1 ? (
              <button
                className={clsx(s.lightboxButton, s.lightboxNext)}
                onClick={lightboxNext}
              >
                <span aria-hidden>→</span>
              </button>
            ) : null}

            {/*<img
            className={s.lightboxImage}
            src={validImages[lightboxImageIdx]}
            alt=""
            onClick={closeLightbox}
          />*/}
          </div>
        </ModalPortal>
      )}
    </>
  );
}

function ModalPortal({ children }: { children: React.ReactNode }) {
  return <>{createPortal(children, document.body)}</>;
}
