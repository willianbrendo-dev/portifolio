import Image from "next/image";
import type { ProjectMedia } from "@/data/portfolio";

export function ProductView({ media }: { media: ProjectMedia }) {
  const [primary, ...secondary] = media.mobile;

  return (
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

      <div className="product-view-mobile-showcase">
        <figure className="product-shot product-shot-primary">
          <div className="product-shot-surface">
            <Image
              src={primary.src}
              alt={primary.alt}
              width={primary.width}
              height={primary.height}
              sizes="(max-width: 600px) calc(100vw - 3.25rem), (max-width: 900px) 42vw, 24rem"
            />
          </div>
          <figcaption>
            <span>{primary.label}</span>
            <p>{primary.caption}</p>
          </figcaption>
        </figure>

        <div
          className="product-view-mobile-rail"
          role="region"
          aria-label={`Outras telas mobile de ${media.projectName}`}
          tabIndex={0}
        >
          {secondary.map((asset) => (
            <figure className="product-shot product-shot-secondary" key={asset.src}>
              <div className="product-shot-surface">
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  sizes="(max-width: 600px) 74vw, (max-width: 900px) 34vw, 18rem"
                />
              </div>
              <figcaption>
                <span>{asset.label}</span>
                <p>{asset.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

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
            sizes="(max-width: 600px) calc(100vw - 3.25rem), (max-width: 900px) 88vw, 72rem"
          />
        </div>
      </figure>
    </section>
  );
}
