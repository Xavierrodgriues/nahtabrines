import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/pharma-grade")({
  component: () => (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold">Pharma Grade Salt</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Ultra-pure pharmaceutical-grade salt manufactured under strict quality controls to meet the demands of medical and laboratory applications.
        </p>
      </div>
    </div>
  ),
});
