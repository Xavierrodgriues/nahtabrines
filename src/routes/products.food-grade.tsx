import { createFileRoute } from "@tanstack/react-router";

function make(title: string, body: string) {
  return function Page() {
    return (
      <div className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>
        </div>
      </div>
    );
  };
}

export const Route = createFileRoute("/products/food-grade")({
  component: make(
    "Food Grade Salt",
    "Premium food-grade salt produced through solar evaporation, refined to the highest purity standards for use across the food and preservation industries.",
  ),
});
