import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";
import { Counter } from "@/components/nahta/Counter";
import { ScrollReveal } from "@/components/nahta/ScrollReveal";
import { ArrowRight, CheckCircle2, Globe, Truck, Award } from "lucide-react";
import range from "@/assets/nahta/range.jpg";
import about from "@/assets/nahta/about.jpg";
import pFood from "@/assets/nahta/p-food.jpg";
import pPharma from "@/assets/nahta/p-pharma.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Nahta Sea Brines" },
      {
        name: "description",
        content:
          "Learn about Nahta Sea Brines — a wholly owned subsidiary of M.N. Nahta Group with 58+ years of excellence in salt manufacturing and export.",
      },
    ],
  }),
  component: About,
});

const features = [
  {
    icon: Globe,
    title: "Experience And Expertise",
    body: "We have been dedicated to producing high-quality salt that meets international standards. Our extensive experience allows us to understand the intricate details of salt production and the diverse needs of our clients.",
  },
  {
    icon: Truck,
    title: "Commitment to Quality",
    body: "Quality is at the heart of everything we do. Our rigorous quality control processes ensure that every batch of salt we produce meets the strictest quality standards. From the raw material selection to the final packaging, we maintain stringent checks to deliver salt that is pure, safe, and consistent.",
  },
  {
    icon: Award,
    title: "Expertise in Export Logistics",
    body: "Exporting salt to various parts of the world requires a deep understanding of international trade and logistics. Our experienced export team handles everything from compliance with global trade regulations to efficient logistics and timely delivery.",
  },
];

const expertiseList = [
  "Advanced Manufacturing Techniques",
  "Commitment to Quality",
  "Expertise in Export Logistics",
  "Natural Sea Salt",
  "Customized Salt Production",
  "Global Reach",
];

function About() {
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
        }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <ScrollReveal animation="fade-right" duration={800}>
            <h1 className="about-hero-title">About Us</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={160} duration={700}>
            <p className="about-hero-breadcrumb">
              <Link to="/" className="about-hero-breadcrumb-link">Home</Link>
              <ArrowRight className="about-hero-breadcrumb-arrow" />
              About us
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Decades of Excellence Section ── */}
      <section className="about-main-section">
        <div className="about-main-inner">
          {/* Left: text */}
          <ScrollReveal animation="fade-right" duration={750} className="about-text-col">
            <h2 className="about-main-heading">
              Decades of Excellence<br />
              in <span className="text-brand">Salt Industry</span>
            </h2>

            <div className="about-paragraphs">
              <p>
                <span className="about-link-text">Nahta Sea Brines is a wholly owned subsidiary of the M.N. Nahta Group of
                companies.</span> It owns and operates two salt fields in the{" "}
                <span className="about-link-text">Kutch and Patan</span> districts of Gujarat, Western India.
              </p>
              <p>
                The <span className="about-link-text">Nahta salt fields, located approximately 40 kilometers and 90 kilometers
                from Kandla and Mundra Ports respectively,</span> began operations in 1968.
              </p>
              <p>
                <span className="about-link-text">
                  Salt (sodium chloride) is an industrial chemical extracted from
                </span>
                {" "}the sea by solar evaporation and is a fundamental product in chemical and food-related
                applications. Traditionally used as a preservative in the food manufacturing
                industry, salt is also the key raw material for{" "}
                <span className="about-link-text">chlor-alkali factories that produce
                caustic soda (sodium hydroxide), chlorine, and soda ash.</span>
              </p>
              <p>
                Nahta's two salt farms produce some of the highest quality solar marine salt
                (sea salt). <span className="about-link-text">Our fields are ideally located to export bulk shipments to Asian
                markets.</span>
              </p>
              <p>
                <span className="about-link-text">Our goal is to bridge the gap between the Asian and African markets in the
                near future.</span>
              </p>
            </div>

            <Link to="/contact" className="about-cta-btn">Contact Us</Link>
          </ScrollReveal>

          {/* Right: stacked images + badge */}
          <ScrollReveal animation="fade-left" delay={120} duration={750} className="about-images-col">
            <div className="about-img-stack">
              <img src={pFood} alt="Salt harvesting" className="about-img-top" />
              <div className="about-img-dots" aria-hidden="true">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span key={i} className="about-dot" />
                ))}
              </div>
              <img src={pPharma} alt="Salt product" className="about-img-bottom" />
              <div className="about-badge">
                <span className="about-badge-number">
                  <Counter end={58} />+
                </span>
                <span className="about-badge-label">Years Of Experience</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Three Feature Cards ── */}
      <section className="about-features-section">
        <div className="about-features-inner">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={f.title} animation="fade-up" delay={i * 130} duration={650}>
                <div className="about-feature-card">
                  <div className="about-feature-icon-wrap">
                    <Icon className="about-feature-icon" />
                  </div>
                  <h3 className="about-feature-title">{f.title}</h3>
                  <p className="about-feature-body">{f.body}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── Expertise in all types Salt ── */}
      <section className="about-expertise-section">
        <div className="about-expertise-inner">
          {/* Left: image */}
          <ScrollReveal animation="fade-right" duration={750} className="about-expertise-img-wrap">
            <img src={about} alt="Salt in bowl" className="about-expertise-img" />
          </ScrollReveal>

          {/* Right: text */}
          <ScrollReveal animation="fade-left" delay={120} duration={750} className="about-expertise-text">
            <h2 className="about-expertise-heading">
              <span className="text-brand">Expertise in</span><br />
              all types Salt
            </h2>
            <p className="about-expertise-body">
              At Nahta Sea Brines, we bring over 58 years of experience in the salt
              manufacturing industry. Our journey began in 1968, and since then, we have
              been dedicated to producing high-quality salt that meets international
              standards. Our extensive experience allows us to understand the intricate details
              of salt production and the diverse needs of our clients.
            </p>

            <ul className="about-expertise-list">
              {expertiseList.map((item, i) => (
                <ScrollReveal key={item} animation="fade-right" delay={i * 80} duration={500} as="li" className="about-expertise-item">
                  <CheckCircle2 className="about-expertise-check" />
                  {item}
                </ScrollReveal>
              ))}
            </ul>

            <Link to="/contact" className="about-cta-btn">Contact Us</Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
