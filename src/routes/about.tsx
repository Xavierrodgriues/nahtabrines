import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us | Nahta Sea Brines" }] }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-secondary px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="mt-3 text-muted-foreground">Home / About us</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-20">
        <p className="text-sm font-semibold text-brand uppercase tracking-spaced">Our Story</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Decades of <span className="text-brand">Salt Mastery</span></h2>
        <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
          <p>Nahta Sea Brines is a wholly owned subsidiary of the M.N. Nahta Group of companies. It owns and operates two salt fields in the Kutch and Patan districts of Gujarat, Western India.</p>
          <p>The Nahta salt fields, located approximately 40 kilometers and 90 kilometers from Kandla and Mundra Ports respectively, began operations in 1968.</p>
          <p>Our two salt farms produce some of the highest quality solar marine salt (sea salt). Our fields are ideally located to export bulk shipments to Asian markets.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
