import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";
import { ScrollReveal } from "@/components/nahta/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import pWater from "@/assets/nahta/p-water.jpg";
import pPvd from "@/assets/nahta/p-pvd.jpg";
import logo from "@/assets/nahta/logo.png";

export const Route = createFileRoute("/products/water-softener")({
  component: WaterSoftener,
});

const saltProducts = [
  { label: "Food Grade Salt", to: "/products/food-grade" },
  { label: "Trade & Industrial Salt", to: "/products/industrial-grade" },
  { label: "Pharma Grade Sodium Salt", to: "/products/pharma-grade" },
  { label: "Water Softener Salt", to: "/products/water-softener" },
];

const uses = [
  "Scale Prevention: Reduces the buildup of scale in pipes and appliances, extending their lifespan and improving efficiency.",
  "Improved Water Quality: Softens water, making it gentler on skin, hair, and clothing.",
  "Easy to Use: Available in pellet and crystal forms, ensuring easy handling and effective results.",
];

const keyFeatures = [
  "High efficiency",
  "Easy handling",
  "Quality Assurance",
];

function WaterSoftener() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Parallax Hero ── */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${pPvd})`,
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
            <h1 className="about-hero-title">Water Softener Salt</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={150} duration={700}>
            <p className="about-hero-breadcrumb">
              <Link to="/" className="about-hero-breadcrumb-link">Home</Link>
              <ArrowRight className="about-hero-breadcrumb-arrow" />
              <span className="about-hero-breadcrumb-link">Services</span>
              <ArrowRight className="about-hero-breadcrumb-arrow" />
              Water Softener Salt
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="pd-section">
        <div className="pd-inner">

          {/* Left: main content */}
          <div className="pd-main">
            {/* Main product image */}
            <ScrollReveal animation="zoom-in" duration={800} className="pd-img-wrap">
              <img src={pWater} alt="Water Softener Salt" className="pd-img" loading="lazy" />
            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal animation="fade-up" duration={700}>
              <h2 className="pd-heading">Water Softener Salt / Salt Tablet</h2>
              <p className="pd-body">
                Designed to optimize the{" "}
                <span className="pd-link-text">performance of water softening systems,</span>{" "}
                our water <span className="pd-link-text">softener</span> salt offers numerous <span className="pd-link-text">benefits:</span>
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

            {/* Salt tablet inline image */}
            <ScrollReveal animation="zoom-in" duration={800} className="pd-inline-img-wrap">
              <img src={pPvd} alt="Salt Tablet" className="pd-inline-img" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" duration={700}>
              <p className="pd-body" style={{ marginTop: "1.5rem" }}>
                Our food grade salt is produced with meticulous care to{" "}
                <span className="pd-link-text">ensure the highest standards of purity and
                quality.</span> It is ideal for a wide range of{" "}
                <span className="pd-link-text">culinary uses, including:</span>
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

