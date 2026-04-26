export type Profile = {
  name: string;
  role: string;
  reviewPeriod: string;
  lastUpdated: string;
  kicker: string;
  headline: string;
  dek: string;
};

export type FigureProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
  figure?: FigureProps;
};

export type ColorToken = {
  name: string;
  label: string;
  light: string;
  dark: string;
};

export type TypeToken = {
  name: string;
  label: string;
  sample: string;
};

export type SpaceToken = {
  name: string;
  label: string;
};

export type RadiusToken = {
  name: string;
  label: string;
};
