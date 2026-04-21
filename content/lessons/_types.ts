import type { ReactNode } from "react";
import type { Exercise } from "@/lib/lesson-types";

export interface VideoResource {
  kind: "video";
  title: string;
  url: string;
  /** Kanal-Name (z. B. «Die Merkhilfe», «studyflix») */
  channel?: string;
  /** Kurznotiz, warum dieses Video gut ist */
  note?: string;
}

export interface PageResource {
  kind: "page";
  title: string;
  url: string;
  /** Anbieter / Website-Name (z. B. «IHK Düsseldorf», «studyflix») */
  source?: string;
  /** Kurznotiz */
  note?: string;
}

export type Resource = VideoResource | PageResource;

export interface Lesson {
  slug: string;
  objectives: string[];
  body: ReactNode;
  exercises?: Exercise[];
  examTips?: string[];
  related?: string[];
  keyTerms?: { term: string; definition: string }[];
  /** Externe Videos und Erklärseiten als Ergänzung. */
  resources?: Resource[];
}
