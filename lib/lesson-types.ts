import type { ReactNode } from "react";

export interface MultipleChoiceOption {
  id: string;
  text: string;
  correct: boolean;
  explanation?: string;
}

export interface MultipleChoiceQuestion {
  kind: "mc";
  id: string;
  question: string;
  multiple?: boolean;
  options: MultipleChoiceOption[];
  hint?: string;
}

export interface RegexPattern {
  /** RegExp source pattern (pattern string, no delimiters). */
  pattern: string;
  /** Optional flags, e.g. "i". */
  flags?: string;
}

export interface SqlExerciseExpected {
  /** Reguläre Ausdrücke, die im Lösungs-SQL matchen sollen (als serialisierbare Objekte). */
  mustMatch: RegexPattern[];
  /** Reguläre Ausdrücke, die NICHT matchen dürfen. */
  mustNotMatch?: RegexPattern[];
}

export interface SqlExercise {
  kind: "sql";
  id: string;
  task: string;
  schema?: string;
  sampleSolution: string;
  check: SqlExerciseExpected;
  hint?: string;
}

export interface PseudocodeTraceStep {
  line: number;
  variables: Record<string, string | number | boolean>;
  note?: string;
}

export interface PseudocodeTrace {
  kind: "trace";
  id: string;
  task: string;
  code: string;
  /** Erwartete Ausgabe als mehrzeiliger String. */
  expectedOutput: string;
  hint?: string;
}

export type Exercise = MultipleChoiceQuestion | SqlExercise | PseudocodeTrace;

export interface LessonSection {
  id: string;
  title: string;
  body: ReactNode;
}

export interface LessonContent {
  slug: string;
  /** Lernziele – erscheinen oben. */
  objectives: string[];
  /** Kernbegriffe, die man parat haben sollte. */
  keyTerms?: { term: string; definition: string }[];
  sections: LessonSection[];
  exercises?: Exercise[];
  /** Tipps, die kurz vor der Prüfung helfen. */
  examTips?: string[];
  /** Verwandte Themen als Slugs. */
  related?: string[];
}
