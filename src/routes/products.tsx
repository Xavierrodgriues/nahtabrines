import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Our Products | Nahta Sea Brines" }] }),
  component: Products,
});

const items = [
  { to: "/products/food-grade", label: "Food Grade Salt" },
  { to: "/products/industrial-grade", label: "Industrial Grade" },
  { to: "/products/pharma-grade", label: "Pharma Grade" },
  { to: "/products/water-softener", label: "Water Softener Salt" },
] as const;

function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-secondary px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold md:text-5xl">Our Products</h1>
          <p className="mt-3 text-muted-foreground">A complete range of solar marine salt for every industry.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <Link key={i.to} to={i.to} className="rounded-lg border border-border p-6 transition hover:border-brand hover:shadow-md">
            <h3 className="text-lg font-semibold">{i.label}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Learn more about our {i.label.toLowerCase()}.</p>
          </Link>
        ))}
      </section>
      <Outlet />
      <Footer />
    </div>
  );
}
