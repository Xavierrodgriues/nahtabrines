import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/industrial-grade")({
  component: () => (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold">Industrial Grade Salt</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          High-purity industrial salt suited for chlor-alkali plants, textile processing, leather tanning and a wide range of chemical applications.
        </p>
      </div>
    </div>
  ),
});
