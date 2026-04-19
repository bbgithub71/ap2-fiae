import type { Exercise } from "@/lib/lesson-types";
import { MultipleChoice } from "./MultipleChoice";
import { SqlExerciseCard } from "./SqlExerciseCard";
import { PseudocodeTracer } from "./PseudocodeTracer";

export function ExerciseList({ items }: { items: Exercise[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-semibold text-zinc-100">Übungen</h2>
      <div>
        {items.map((item) => {
          if (item.kind === "mc") return <MultipleChoice key={item.id} q={item} />;
          if (item.kind === "sql") return <SqlExerciseCard key={item.id} ex={item} />;
          if (item.kind === "trace") return <PseudocodeTracer key={item.id} ex={item} />;
          return null;
        })}
      </div>
    </section>
  );
}
