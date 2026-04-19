import type { ReactNode } from "react";
import type { Exercise } from "@/lib/lesson-types";

export interface Lesson {
  slug: string;
  objectives: string[];
  body: ReactNode;
  exercises?: Exercise[];
  examTips?: string[];
  related?: string[];
  keyTerms?: { term: string; definition: string }[];
}
