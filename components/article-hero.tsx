import type { Profile } from "@/lib/types";

export function ArticleHero({ profile }: { profile: Profile }) {
  return (
    <header className="article-hero">
      <p className="article-hero__meta">
        <span>{profile.kicker}</span>
      </p>
      <h1 className="article-hero__title">{profile.headline}</h1>
      <p className="article-hero__dek">{profile.dek}</p>
    </header>
  );
}
