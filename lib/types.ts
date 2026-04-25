export type Profile = {
  name: string;
  role: string;
  reviewPeriod: string;
  kicker: string;
  headline: string;
  dek: string;
};

export type Figure = {
  src: string;
  alt: string;
  caption: string;
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
  figure?: Figure;
};
