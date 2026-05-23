import { createFileRoute, redirect, Outlet, useMatchRoute } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Our Products | Nahta Sea Brines" }] }),
  beforeLoad: ({ location }) => {
    // Redirect /products exactly to food-grade detail page
    if (location.pathname === "/products" || location.pathname === "/products/") {
      throw redirect({ to: "/products/food-grade" });
    }
  },
  component: ProductsLayout,
});

// Minimal layout wrapper — child routes render their own Header/Footer
function ProductsLayout() {
  return <Outlet />;
}
