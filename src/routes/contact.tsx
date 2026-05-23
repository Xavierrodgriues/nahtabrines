import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us | Nahta Sea Brines" }] }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-secondary px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-3 text-muted-foreground">Home / Contact Us</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-3">
        {[
          { icon: MapPin, title: "Address", body: "D.B.Z-S-60, Near Municipal Office, Opp. Rotary Bhavan, Gandhidham, Gujarat 370201" },
          { icon: Mail, title: "Email", body: "vijay@nahtabrines.com" },
          { icon: Phone, title: "Inquiry", body: "info@nahtabrines.com" },
        ].map((c) => (
          <div key={c.title} className="rounded-lg border border-border bg-background p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
