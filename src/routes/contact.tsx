import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";
import { ScrollReveal } from "@/components/nahta/ScrollReveal";
import { ArrowRight, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import range from "@/assets/nahta/range.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Nahta Sea Brines" },
      {
        name: "description",
        content:
          "Get in touch with Nahta Sea Brines. Find our address, email, and location map. We'd love to hear from you.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero Banner with Parallax ── */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${range})`,
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
            <h1 className="about-hero-title">Contact Us</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={150} duration={700}>
            <p className="about-hero-breadcrumb">
              <Link to="/" className="about-hero-breadcrumb-link">Home</Link>
              <ArrowRight className="about-hero-breadcrumb-arrow" />
              Contact Us
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Drop us a line + Quick Links ── */}
      <section className="contact-cards-section">
        <div className="contact-cards-inner">

          {/* Drop us a line */}
          <ScrollReveal animation="fade-right" duration={750} className="contact-card">
            <h2 className="contact-card-title">Drop us a line</h2>
            <p className="contact-card-body">
              <span className="contact-link-text">Discover the Nahta Sea Brines</span> difference.
              Partner with us for all your salt needs and experience{" "}
              <span className="contact-link-text">unparalleled quality, service, and reliability.</span>{" "}
              Contact us today to learn more about our products and{" "}
              <span className="contact-link-text">how</span> we can serve you.
            </p>
          </ScrollReveal>

          {/* Quick links */}
          <ScrollReveal animation="fade-left" duration={750} className="contact-card">
            <h2 className="contact-card-title">Quick links</h2>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:info@nahtabrines.com" className="contact-info-text contact-info-link">
                  info@nahtabrines.com
                </a>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="contact-info-text">
                  D.B.Z-S-60, Near Municipal Office, Opp. Rotary Bhavan, Gandhidham, Gujarat 370201
                </span>
              </div>
            </div>
            <div className="contact-divider" />
            <div className="contact-social-row">
              <a href="#" aria-label="Facebook" className="contact-social-icon">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="contact-social-icon">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="contact-social-icon">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── Google Maps ── */}
      <section className="contact-map-section">
        <ScrollReveal animation="zoom-in" duration={800}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8259862382615!2d70.14236319999999!3d23.066840400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b98e6a662ce5%3A0x549da770613007d7!2sNAHTA%20SEA%20BRINES!5e0!3m2!1sen!2sin!4v1779576056984!5m2!1sen!2sin"
            className="contact-map-iframe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nahta Sea Brines Location"
          />
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}

