import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";
import { ScrollReveal } from "@/components/nahta/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import range from "@/assets/nahta/range.jpg";
import pIndustrial from "@/assets/nahta/p-industrial.jpg";
import logo from "@/assets/nahta/logo.png";

export const Route = createFileRoute("/products/industrial-grade")({
  head: () => ({
    meta: [
      { title: "Trade & Industrial Grade Salt | Nahta Sea Brines" },
      {
        name: "description",
        content:
          "High-purity trade and industrial grade salt by Nahta Sea Brines — suited for chemical manufacturing, de-icing, textile processing and a wide range of industrial applications.",
      },
    ],
  }),
  component: IndustrialGrade,
});

const saltProducts = [
  { label: "Food Grade Salt", to: "/products/food-grade" },
  { label: "Trade & Industrial Salt", to: "/products/industrial-grade" },
  { label: "Pharma Grade Sodium Salt", to: "/products/pharma-grade" },
  { label: "Water Softener Salt", to: "/products/water-softener" },
];

const uses = [
  "De-icing: Effective in preventing ice formation on roads and pavements, ensuring safety during winter months.",
  "Chemical Manufacturing: A crucial raw material in the production of caustic soda, chlorine, and soda ash, essential for various industries.",
];

const keyFeatures = [
  "Consistent quality",
  "Bulk availability",
  "Match client specific requirement",
];

function IndustrialGrade() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Parallax Hero ── */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${range})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <ScrollReveal animation="fade-right" duration={800}>
            <h1 className="about-hero-title">Trade &amp; Industrial Grade Salt</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={150} duration={700}>
            <p className="about-hero-breadcrumb">
              <Link to="/" className="about-hero-breadcrumb-link">Home</Link>
              <ArrowRight className="about-hero-breadcrumb-arrow" />
              <span className="about-hero-breadcrumb-link">Services</span>
              <ArrowRight className="about-hero-breadcrumb-arrow" />
              Industrial Grade
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="pd-section">
        <div className="pd-inner">

          {/* Left: main content */}
          <div className="pd-main">
            {/* Product image */}
            <ScrollReveal animation="zoom-in" duration={800} className="pd-img-wrap">
              <img src={pIndustrial} alt="Trade & Industrial Grade Salt" className="pd-img" />
            </ScrollReveal>

            {/* Industrial Grade Use */}
            <ScrollReveal animation="fade-up" duration={700}>
              <h2 className="pd-heading">Industrial Grade Use</h2>
              <p className="pd-body">
                We supply a robust range of trade and{" "}
                <span className="pd-link-text">industrial salt, tailored for diverse industrial applications.</span>{" "}
                Key <span className="pd-link-text">uses</span> include:
              </p>
            </ScrollReveal>

            <ul className="pd-uses-list">
              {uses.map((u, index) => (
                <ScrollReveal
                  key={u}
                  animation="fade-up"
                  delay={100 + index * 50}
                  duration={600}
                  as="li"
                  className="pd-uses-item"
                >
                  <CheckCircle2 className="pd-check" />
                  <span>{u}</span>
                </ScrollReveal>
              ))}
            </ul>

            {/* Key Features */}
            <ScrollReveal animation="fade-up" duration={700}>
              <h3 className="pd-subheading">Key Features :</h3>
            </ScrollReveal>
            <ul className="pd-features-list">
              {keyFeatures.map((f, index) => (
                <ScrollReveal
                  key={f}
                  animation="fade-up"
                  delay={100 + index * 50}
                  duration={600}
                  as="li"
                  className="pd-uses-item"
                >
                  <CheckCircle2 className="pd-check" />
                  <span>{f}</span>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal animation="fade-up" duration={700}>
              <p className="pd-body" style={{ marginTop: "1.5rem" }}>
                Our industrial salt is known for its{" "}
                <span className="pd-link-text">high consistency and reliability, making it a trusted choice for businesses
                across multiple sectors.</span>
              </p>
            </ScrollReveal>
          </div>

          {/* Right: sidebar */}
          <aside className="pd-sidebar">

            {/* Salt Products widget */}
            <ScrollReveal animation="fade-left" duration={750} className="pd-widget pd-widget--dark">
              <h3 className="pd-widget-title">Salt Products</h3>
              <ul className="pd-widget-list">
                {saltProducts.map((p) => (
                  <li key={p.to}>
                    <Link to={p.to} className="pd-widget-link">
                      <ArrowRight className="pd-widget-arrow" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Need Help widget */}
            <ScrollReveal animation="fade-left" delay={150} duration={750} className="pd-widget pd-widget--light">
              <div className="pd-widget-logo">
                <img src={logo} alt="Nahta Sea Brines" className="pd-widget-logo-img" />
              </div>
              <h3 className="pd-widget-help-title">Need Help ?</h3>
              <p className="pd-widget-help-body">
                Got questions or need assistance with your salt needs? Our team is here to help.
              </p>
              <Link to="/contact" className="pd-widget-cta">
                Contact Us
              </Link>
            </ScrollReveal>

          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

