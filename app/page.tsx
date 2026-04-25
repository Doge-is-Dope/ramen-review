import { ArticleBody } from "@/components/article-body";
import { ArticleHero } from "@/components/article-hero";
import { ThemeToggle } from "@/components/theme-toggle";
import { sections } from "@/content/article";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <div className="top-bar">
        <span className="top-bar__name">RAMEN</span>
        <ThemeToggle />
      </div>

      <main className="article-shell">
        <ArticleHero profile={profile} />
        <ArticleBody sections={sections} />
      </main>

      <footer className="site-footer">
        <span className="site-footer__name">
          {profile.name} · {profile.role}
        </span>
        <span className="site-footer__updated">
          Last updated {profile.lastUpdated}
        </span>
      </footer>
    </>
  );
}
