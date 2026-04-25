import { Figure } from "@/components/figure";
import type { ArticleSection } from "@/lib/types";

export function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="article-body">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="article-section">
          <h2 className="article-section__title">{section.title}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className="article-section__paragraph">
              {paragraph}
            </p>
          ))}
          {section.items && section.items.length > 0 ? (
            <ul className="article-section__list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.figure ? <Figure {...section.figure} /> : null}
        </section>
      ))}
    </div>
  );
}
