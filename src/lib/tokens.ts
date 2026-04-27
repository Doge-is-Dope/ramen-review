import type {
  ColorToken,
  RadiusToken,
  SpaceToken,
  TypeToken,
} from "@/lib/types";

export const colorTokens: readonly ColorToken[] = [
  { name: "--bg", label: "Background", light: "#ffffff", dark: "#0a0a0a" },
  { name: "--fg", label: "Foreground", light: "#000000", dark: "#f4f4f5" },
  { name: "--muted", label: "Muted", light: "#6b7280", dark: "#9ca3af" },
  { name: "--rule", label: "Rule", light: "#e5e7eb", dark: "#262626" },
] as const;

export const typeTokens: readonly TypeToken[] = [
  { name: "--fs-h1", label: "Display", sample: "Reason. Act. Monitor." },
  { name: "--fs-h2", label: "Section heading", sample: "How the loop runs" },
  {
    name: "--fs-dek",
    label: "Dek",
    sample: "A short standfirst that sits beneath the headline.",
  },
  {
    name: "--fs-body",
    label: "Body",
    sample: "Body copy carries the weight of the article.",
  },
  {
    name: "--fs-row-title",
    label: "Row title",
    sample: "List row heading",
  },
  { name: "--fs-meta", label: "Meta", sample: "Metadata and labels" },
  { name: "--fs-caption", label: "Caption", sample: "Figure caption" },
] as const;

export const spaceTokens: readonly SpaceToken[] = [
  { name: "--space-gutter", label: "Page gutter" },
  { name: "--space-section", label: "Section gap" },
  { name: "--space-hero-y", label: "Hero vertical" },
] as const;

export const radiusTokens: readonly RadiusToken[] = [
  { name: "--radius-xs", label: "XS" },
  { name: "--radius-sm", label: "SM" },
] as const;
