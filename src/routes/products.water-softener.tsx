import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/water-softener")({
  component: () => (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold">Water Softener Salt</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          High-grade water softener salt designed to remove hardness ions from water, protecting appliances and improving water quality for residential and industrial use.
        </p>
      </div>
    </div>
  ),
});
