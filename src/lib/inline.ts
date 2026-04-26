export type InlinePart = string | { code: string };

export function splitInline(text: string): InlinePart[] {
  return text
    .split("`")
    .map((part, i) => (i % 2 === 1 ? { code: part } : part));
}
