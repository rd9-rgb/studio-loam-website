import Image from "next/image";
import RevealInit from "./reveal-init";

const projects = [
  {
    location: "Milan, IT",
    year: "2025",
    title: "Casa Belvedere",
    description:
      "A full reno of a 1960s apartment — plaster walls, reclaimed oak, and a kitchen built around one long table.",
    finish: "lime plaster, travertine",
    scope: "full interior, 210m²",
    img: "/images/building1.jpg",
  },
  {
    location: "Lake Como, IT",
    year: "2024",
    title: "The Reading House",
    description:
      "A quiet lakeside retreat designed around a single deep window seat and a wall of built-in shelving.",
    finish: "white oak, linen",
    scope: "interior + built-ins",
    img: "https://picsum.photos/id/1048/900/1125",
  },
  {
    location: "Turin, IT",
    year: "2024",
    title: "Nord Loft",
    description:
      "An industrial shell reworked with warm plaster and brass hardware, keeping the original steel trusses exposed.",
    finish: "brushed brass, steel",
    scope: "full interior, 140m²",
    img: "https://picsum.photos/id/1060/900/1125",
  },
  {
    location: "Portofino, IT",
    year: "2023",
    title: "Hotel Aeri, Suite 4",
    description:
      "A boutique hospitality commission — twelve rooms, each tuned to a different quality of coastal light.",
    finish: "terrazzo, rattan",
    scope: "hospitality, 12 rooms",
    img: "https://picsum.photos/id/1074/900/1125",
  },
];

export default function Home() {
  return (
    <>
      <nav>
        <div className="logo">Studio Loam</div>
        <div className="navlinks">
          <a href="#projects">Projects</a>
          <a href="#approach">Practice</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <Image
          className="hero-img"
          src="https://picsum.photos/id/164/1600/1000"
          alt="Warm-toned interior with natural light"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-tint" />
        <div className="hero-content">
          <span className="hero-eyebrow">
            Residential &amp; Hospitality Interiors — Est. 2016
          </span>
          <h1>
            Rooms built around <em>how light lands</em> in them.
          </h1>
        </div>
      </section>

      <section className="statement wrap">
        <p>
          We start with the site, not the sofa — orientation, material, and
          the hour the room is used most, then design toward that.
        </p>
        <span className="sig">— Studio Loam, Founding Principle</span>
      </section>

      <section className="projects wrap" id="projects">
        <div className="section-head">
          <h2>Selected Projects</h2>
          <span className="count mono">04 of 27 shown</span>
        </div>

        {projects.map((project, i) => (
          <div
            className={`project reveal${i % 2 === 1 ? " reverse" : ""}`}
            key={project.title}
          >
            <div className="project-img-wrap">
              <Image
                className="project-img"
                src={project.img}
                alt={`${project.title} render`}
                fill
                sizes="(max-width: 820px) 100vw, 50vw"
              />
            </div>
            <div className="project-label">
              <div className="plate">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="specs">
                <span>
                  Finish — <b>{project.finish}</b>
                </span>
                <span>
                  Scope — <b>{project.scope}</b>
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="approach" id="approach">
        <div className="wrap">
          <div className="section-head">
            <h2>How We Work</h2>
            <span className="count mono">Practice</span>
          </div>
          <div className="approach-grid">
            <div className="approach-item reveal">
              <span className="mono">Site First</span>
              <h3>We visit before we sketch.</h3>
              <p>
                Light studies, material samples on-site, and a walk-through
                with you before a single drawing is made.
              </p>
            </div>
            <div className="approach-item reveal">
              <span className="mono">One Point of Contact</span>
              <h3>You speak to your designer.</h3>
              <p>
                No account managers — the person designing your space is the
                person answering your emails.
              </p>
            </div>
            <div className="approach-item reveal">
              <span className="mono">Built, Not Just Rendered</span>
              <h3>We stay through installation.</h3>
              <p>
                Renders are a proposal, not the finish line — we&apos;re
                on-site through the final placement of furniture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact wrap" id="contact">
        <h2>
          Have a room that needs <em>better light?</em>
        </h2>
        <a className="cta" href="mailto:hello@studioloam.example">
          Start a project — hello@studioloam.example
        </a>
      </section>

      <footer className="wrap">
        <span>Studio Loam © 2026</span>
        <span>Milan · Turin · Lake Como</span>
      </footer>

      <RevealInit />
    </>
  );
}
