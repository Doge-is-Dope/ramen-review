import type { Metadata } from "next";
import {
  colorTokens,
  radiusTokens,
  spaceTokens,
  typeTokens,
} from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Design tokens · Clement Liang",
  description: "Internal design-token reference for the RAMEN portfolio.",
  robots: { index: false, follow: false },
};

type Mode = "light" | "dark";

export default function TokensPage() {
  return (
    <main className="article-shell">
      <div className="tokens-page">
        <header>
          <h1 className="tokens-page__heading">Design tokens</h1>
          <p className="tokens-page__intro">
            Single source of truth for color, typography, spacing, and radius.
            Light and dark palettes are previewed side-by-side; everything else
            renders in the active theme.
          </p>
        </header>

        <section className="tokens-page__group" aria-labelledby="tokens-color">
          <h2 id="tokens-color" className="tokens-page__heading">
            Color
          </h2>
          <ColorMatrix mode="light" />
          <ColorMatrix mode="dark" />
        </section>

        <section className="tokens-page__group" aria-labelledby="tokens-type">
          <h2 id="tokens-type" className="tokens-page__heading">
            Typography
          </h2>
          <div className="tokens-type">
            {typeTokens.map((token) => (
              <div key={token.name} className="tokens-type__row">
                <div
                  className="tokens-type__sample"
                  style={{ fontSize: `var(${token.name})` }}
                >
                  {token.sample}
                </div>
                <div className="tokens-type__meta">
                  <span>{token.name}</span>
                  <span> · {token.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="tokens-page__group" aria-labelledby="tokens-space">
          <h2 id="tokens-space" className="tokens-page__heading">
            Spacing
          </h2>
          {spaceTokens.map((token) => (
            <div key={token.name} className="tokens-row">
              <div
                className="tokens-row__bar"
                style={{ width: `var(${token.name})` }}
              />
              <div className="tokens-row__meta">
                <span>{token.name}</span>
                <span>{token.label}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="tokens-page__group" aria-labelledby="tokens-radius">
          <h2 id="tokens-radius" className="tokens-page__heading">
            Radius
          </h2>
          {radiusTokens.map((token) => (
            <div key={token.name} className="tokens-row">
              <div
                className="tokens-row__square"
                style={{ borderRadius: `var(${token.name})` }}
              />
              <div className="tokens-row__meta">
                <span>{token.name}</span>
                <span>{token.label}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

function ColorMatrix({ mode }: { mode: Mode }) {
  return (
    <div data-theme={mode} className="tokens-grid">
      {colorTokens.map((token) => {
        const value = mode === "dark" ? token.dark : token.light;
        return (
          <div key={`${mode}-${token.name}`} className="tokens-swatch">
            <div
              className="tokens-swatch__chip"
              style={{ background: value }}
              aria-hidden
            />
            <span className="tokens-swatch__name">{token.name}</span>
            <span className="tokens-swatch__value">{value}</span>
            <span className="tokens-swatch__label">
              {token.label} · {mode}
            </span>
          </div>
        );
      })}
    </div>
  );
}
