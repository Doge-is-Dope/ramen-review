import { ArticleBody } from "@/components/article-body";
import { ArticleHero } from "@/components/article-hero";
import { sections } from "@/content/article";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <div className="top-bar">
        <span className="top-bar__name">{profile.name}</span>
        <span>{profile.reviewPeriod}</span>
      </div>

      <main className="article-shell">
        <ArticleHero profile={profile} />
        <ArticleBody sections={sections} />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          {profile.name} · {profile.role}
        </div>
      </footer>
    </>
  );
}
