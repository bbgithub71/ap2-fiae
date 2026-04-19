export type Priority = "essentiell" | "sehr-hoch" | "hoch" | "mittel" | "niedrig";

export const priorityMeta: Record<
  Priority,
  { label: string; short: string; description: string; weight: number; color: string }
> = {
  essentiell: {
    label: "Essentiell",
    short: "Muss-Wissen",
    description: "Kommt praktisch in jeder Prüfung vor (100%). Hier nichts offen lassen.",
    weight: 5,
    color: "rose",
  },
  "sehr-hoch": {
    label: "Sehr hoch",
    short: "Hotspot",
    description: "Fast immer in der Prüfung (80–99%). Intensiv üben.",
    weight: 4,
    color: "orange",
  },
  hoch: {
    label: "Hoch",
    short: "Wichtig",
    description: "Häufig Teil der Prüfung (60–79%) oder bringt viele Punkte.",
    weight: 3,
    color: "amber",
  },
  mittel: {
    label: "Mittel",
    short: "Solide",
    description: "Gelegentlich Teil der Prüfung (40–59%). Verstehen, aber nicht überinvestieren.",
    weight: 2,
    color: "sky",
  },
  niedrig: {
    label: "Niedrig",
    short: "Kennen",
    description: "Selten oder als Randthema (unter 40%). Überblick reicht meist.",
    weight: 1,
    color: "slate",
  },
};

export const priorityOrder: Priority[] = [
  "essentiell",
  "sehr-hoch",
  "hoch",
  "mittel",
  "niedrig",
];
