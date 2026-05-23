import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/nahta/Header";
import { Footer } from "@/components/nahta/Footer";
import { Counter } from "@/components/nahta/Counter";
import { ArrowRight } from "lucide-react";
import icon1 from "@/assets/nahta/icon1.svg";
import icon2 from "@/assets/nahta/icon2.svg";
import icon3 from "@/assets/nahta/icon3.svg";
import about from "@/assets/nahta/about.jpg";
import range from "@/assets/nahta/range.jpg";
import pFood from "@/assets/nahta/p-food.jpg";
import pIndustrial from "@/assets/nahta/p-industrial.jpg";
import pPharma from "@/assets/nahta/p-pharma.jpg";
import pTextile from "@/assets/nahta/p-textile.jpg";
import pWater from "@/assets/nahta/p-water.jpg";
import pPvd from "@/assets/nahta/p-pvd.jpg";
import pack1 from "@/assets/nahta/pack1.png";
import pack2 from "@/assets/nahta/pack2.png";
import pack3 from "@/assets/nahta/pack3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nahta Sea Brines | Salt Manufacturer & Exporter, Kutch Gujarat" },
      { name: "description", content: "Nahta Sea Brines — leading salt manufacturer & exporter in Kutch near Kandla & Mundra Port. Food, industrial, pharma & water softener salt since 1968." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: icon1, title: "Decades of Excellence", body: "we bring over 58 years of experience in the salt manufacturing industry. Our journey began in 1968." },
  { icon: icon2, title: "Natural Sea Salt", body: "We employ advanced techniques in salt extraction, purification, and crystallization to ensure the highest purity and quality." },
  { icon: icon3, title: "Expertise in Export Logistics", body: "Exporting salt to various parts of the world requires a deep understanding of international trade and logistics." },
];

const products = [
  { img: pFood, title: "Food Grade Salt" },
  { img: pIndustrial, title: "Trade & Industrial Grade" },
  { img: pPharma, title: "Pharma Grade" },
  { img: pTextile, title: "Textile & Chemical Grade" },
  { img: pWater, title: "Water Softening Salt" },
  { img: pPvd, title: "PVD Salt" },
];

const stats = [
  { label: "Food Grade", end: 100 },
  { label: "Industrial Grade", end: 200 },
  { label: "Sodium Chloride", end: 150 },
  { label: "Water Softening", end: 80 },
];

function Spaced({ children }: { children: string }) {
  return <span className="tracking-spaced uppercase">{children}</span>;
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={range} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-28 md:py-40">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              <span className="text-white">WELCOME TO THE</span>
              <br />
              <span className="text-brand">WORLD OF SALT</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              We are one of the largest salt Manufacturer & Exporter in the Kutch Near Kandla & Mundra Port. Our goal is to bridge the gap between Asian and African market in near future.
            </p>
            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 font-semibold text-white shadow-lg transition hover:translate-y-[-2px] hover:bg-brand/90"
            >
              Explore More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 -mt-16 px-4 md:-mt-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`rounded-lg p-8 shadow-xl transition hover:translate-y-[-4px] ${
                i === 1 ? "bg-primary text-primary-foreground" : "bg-background"
              }`}
            >
              <img src={f.icon} alt="" className="h-12 w-12" />
              <h3 className={`mt-5 text-xl font-semibold ${i === 1 ? "text-white" : ""}`}>{f.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-white/85" : "text-muted-foreground"}`}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About / Introduction */}
      <section id="about" className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <img src={about} alt="Salt fields" className="rounded-lg shadow-xl" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-brand px-8 py-6 text-white shadow-xl md:block">
              <div className="text-4xl font-bold leading-none">
                <Counter end={58} />
              </div>
              <div className="mt-1 text-sm uppercase tracking-wider">Years Of Experience</div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand">
              <Spaced>Introduction</Spaced>
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Welcome to the world of <span className="text-brand">SALT</span>
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>Nahta Sea Brines is a wholly owned subsidiary of the M.N. Nahta Group of companies. It owns and operates two salt fields in the Kutch and Patan districts of Gujarat, Western India.</p>
              <p>The Nahta salt fields, located approximately 40 kilometers and 90 kilometers from Kandla and Mundra Ports respectively, began operations in 1968.</p>
              <p>Salt (sodium chloride) is an industrial chemical extracted from the sea by solar evaporation and is a fundamental product in chemical and food-related applications. Traditionally used as a preservative in the food manufacturing industry, salt is also the key raw material for chlor-alkali factories that produce caustic soda (sodium hydroxide), chlorine, and soda ash.</p>
              <p>Nahta's two salt farms produce some of the highest quality solar marine salt (sea salt). Our fields are ideally located to export bulk shipments to Asian markets.</p>
              <p>Our goal is to bridge the gap between the Asian and African markets in the near future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Range of products */}
      <section className="bg-secondary px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Our Range of <span className="text-brand">Salt Products</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              At Nahta Sea Brines, quality and sustainability are at the core of our operations. We are committed to delivering products that meet the highest standards while minimizing our environmental footprint. Our dedicated team continually strives for excellence, ensuring that our customers receive only the best.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.title} className="group overflow-hidden rounded-lg bg-background shadow-md">
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="rounded-full bg-brand/10 p-2 text-brand transition group-hover:bg-brand group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary px-4 py-20 text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <img src={range} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Kutch's Leading <span className="text-brand">Salt Exporter</span>
            </h2>
            <p className="mt-3 text-white/85">
              We are the leading Salt exporter in Kutch (Gujarat) — Near Kandla / Mundra Port.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3 font-semibold text-white transition hover:translate-y-[-2px] hover:bg-brand/90"
          >
            Contact Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Packaging products */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Our <span className="text-brand">Products</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We are one of the leading concerns, engaged in manufacturing & supplying a wide range of industrial salt and its bye-products.
            </p>
          </div>
          <div className="mt-12 grid items-end gap-8 sm:grid-cols-3">
            {[pack1, pack2, pack3].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img src={src} alt="Product packaging" className="mx-auto h-auto w-full max-w-xs object-contain transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary px-4 py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl font-bold text-brand md:text-6xl">
                <Counter end={s.end} />
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-white/90">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
