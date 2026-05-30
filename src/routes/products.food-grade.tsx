import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";
import { ScrollReveal } from "@/components/nahta/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import foodHeroBg from "@/assets/nahta/about.jpg";
import pFood from "@/assets/nahta/p-food.jpg";
import logo from "@/assets/nahta/logo.png";
import pack1 from "@/assets/nahta/pack1.png";
import pack2 from "@/assets/nahta/pack2.png";
import pack3 from "@/assets/nahta/pack3.png";

export const Route = createFileRoute("/products/food-grade")({
  component: FoodGrade,
});

const saltProducts = [
  { label: "Food Grade Salt", to: "/products/food-grade" },
  { label: "Trade & Industrial Salt", to: "/products/industrial-grade" },
  { label: "Pharma Grade Sodium Salt", to: "/products/pharma-grade" },
  { label: "Water Softener Salt", to: "/products/water-softener" },
];

const uses = [
  "Cooking and Baking: Enhances the flavor of dishes and ensures proper seasoning.",
  "Food Preservation: Used in pickling, curing meats, and preserving vegetables and fruits.",
  "Food Processing: Essential in the manufacturing of snacks, sauces, canned goods, and more.",
];

const keyFeatures = [
  "High Food Grade Purity",
  "As per client requirement",
  "Meets international food safety standards",
];

function FoodGrade() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Parallax Hero ── */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${foodHeroBg})`,
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
            <h1 className="about-hero-title">Food Grade Salt</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={150} duration={700}>
            <p className="about-hero-breadcrumb">
              <Link to="/" className="about-hero-breadcrumb-link">Home</Link>
              <ArrowRight className="about-hero-breadcrumb-arrow" />
              <span className="about-hero-breadcrumb-link">Services</span>
              <ArrowRight className="about-hero-breadcrumb-arrow" />
              Food Grade Salt
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
              <img src={pFood} alt="Food Grade Salt" className="pd-img" loading="lazy" />
            </ScrollReveal>

            {/* Extensive Experience */}
            <ScrollReveal animation="fade-up" duration={700}>
              <h2 className="pd-heading">Extensive Experience</h2>
              <p className="pd-body">
                Our food grade salt is produced with meticulous care to{" "}
                <span className="pd-link-text">ensure the highest standards of purity and
                quality.</span> It is ideal for a wide range of culinary uses, including:
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

            {/* Packaging images */}
            <div className="pd-packs">
              {[pack1, pack2, pack3].map((src, i) => (
                <ScrollReveal
                  key={i}
                  animation="zoom-in"
                  delay={i * 120}
                  duration={600}
                  className="pd-pack-item"
                >
                  <img src={src} alt={`Salt packaging ${i + 1}`} className="pd-pack-img" loading="lazy" />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" duration={700}>
              <p className="pd-body" style={{ marginTop: "1.5rem" }}>
                Our food grade salt is produced with meticulous care to{" "}
                <span className="pd-link-text">ensure the highest standards of purity and
                quality.</span> It is ideal for a wide range of culinary uses, including:
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
                    <Link
                      to={p.to}
                      className={`pd-widget-link [&.active]:pd-widget-link--active`}
                    >
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

