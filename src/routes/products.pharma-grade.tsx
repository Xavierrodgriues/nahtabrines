import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";
import { ScrollReveal } from "@/components/nahta/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import pPharma from "@/assets/nahta/p-pharma.jpg";
import cleanSaltBody from "@/assets/nahta/about.jpg";
import logo from "@/assets/nahta/logo.png";

export const Route = createFileRoute("/products/pharma-grade")({
  component: PharmaGrade,
});

const saltProducts = [
  { label: "Food Grade Salt", to: "/products/food-grade" },
  { label: "Trade & Industrial Salt", to: "/products/industrial-grade" },
  { label: "Pharma Grade Sodium Salt", to: "/products/pharma-grade" },
  { label: "Water Softener Salt", to: "/products/water-softener" },
];

const uses = [
  "Medical Solutions: Integral in the preparation of IV fluids, saline solutions, and wound care products.",
  "Pharmaceutical Manufacturing: Used in the formulation of tablets, capsules, and other medications.",
  "Lab Applications: Essential for various laboratory procedures and experiments.",
];

const keyFeatures = [
  "Ultra-high purity",
  "Stringent quality controls",
  "Safe for sensitive medical applications",
];

function PharmaGrade() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Parallax Hero ── */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${pPharma})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "var(--primary)",
        }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <ScrollReveal animation="fade-right" duration={800}>
            <h1 className="about-hero-title">Pharma Grade Sodium Salt</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={150} duration={700}>
            <p className="about-hero-breadcrumb">
              <Link to="/" className="about-hero-breadcrumb-link">Home</Link>
              <ArrowRight className="about-hero-breadcrumb-arrow" />
              <span className="about-hero-breadcrumb-link">Services</span>
              <ArrowRight className="about-hero-breadcrumb-arrow" />
              Pharma Grade
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
              <img src={cleanSaltBody} alt="Pharma Grade Sodium Salt" className="pd-img" loading="lazy" />
            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal animation="fade-up" duration={700}>
              <h2 className="pd-heading" style={{ textTransform: "uppercase", letterSpacing: "0.02em" }}>
                Pharmaceutical Sodium Chloride
              </h2>
              <p className="pd-body">
                Our pharmaceutical-grade{" "}
                <span className="pd-link-text">sodium chloride is produced under stringent quality controls</span>{" "}
                to meet the exacting standards required for{" "}
                <span className="pd-link-text">medical</span> and{" "}
                <span className="pd-link-text">pharmaceutical applications.</span>{" "}
                Uses <span className="pd-link-text">include:</span>
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
                Our pharmaceutical sodium chloride is highly pure,{" "}
                <span className="pd-link-text">ensuring it is free from contaminants</span>{" "}
                and safe for critical medical applications.
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
                <img src={logo} alt="Nahta Sea Brines" className="pd-widget-logo-img" loading="lazy" />
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

