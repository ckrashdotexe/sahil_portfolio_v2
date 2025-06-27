import React from "react";
import { createRoot } from "react-dom/client";

const projects = [
  {
    title: "Fashion Shoot",
    img: "assets/img/work 1.jpg",
    desc: "Commercial fashion photography for brands.",
  },
  {
    title: "Event Coverage",
    img: "assets/img/work2.jpg",
    desc: "Capturing live events and candid moments.",
  },
  {
    title: "Product Photography",
    img: "assets/img/work 3.jpg",
    desc: "Clean, impactful product shots for e-commerce.",
  },
];

function PortfolioCard({ title, img, desc }) {
  return (
    <div className="portfolio-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function PortfolioSection() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <PortfolioCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

const root = createRoot(document.getElementById("portfolio-root"));
root.render(<PortfolioSection />);