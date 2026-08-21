import Image from "next/image";
import RevealInit from "./reveal-init";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

type Project = {
  _id: string;
  title: string;
  location: string;
  year: string;
  description: string;
  finish: string;
  scope: string;
  image?: any;
};

type SiteSettings = {
  heroEyebrow?: string;
  heroHeadline?: string;
  statementQuote?: string;
  statementSignature?: string;
  contactHeadline?: string;
  contactEmail?: string;
};

function renderEmphasis(text: string) {
  return text.split("*").map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : part
  );
}

export default async function Home() {
  const [projects, settings] = await Promise.all([
    client.fetch<Project[]>(
      `*[_type == "project"] | order(order asc){_id, title, location, year, description, finish, scope, image}`
    ),
    client.fetch<SiteSettings | null>(`*[_type == "siteSettings"][0]`),
  ]);

  const heroHeadline =
    settings?.heroHeadline || "Rooms built around *how light lands* in them.";
  const contactHeadline =
    settings?.contactHeadline || "Have a room that needs *better light?*";
  const contactEmail = settings?.contactEmail || "hello@studioloam.example";

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
            {settings?.heroEyebrow ||
              "Residential & Hospitality Interiors — Est. 2016"}
          </span>
          <h1>{renderEmphasis(heroHeadline)}</h1>
        </div>
      </section>

      <section className="statement wrap">
        <p>
          {settings?.statementQuote ||
            "We start with the site, not the sofa — orientation, material, and the hour the room is used most, then design toward that."}
        </p>
        <span className="sig">
          {settings?.statementSignature || "— Studio Loam, Founding Principle"}
        </span>
      </section>

      <section className="projects wrap" id="projects">
        <div className="section-head">
          <h2>Selected Projects</h2>
          <span className="count mono">{projects.length} shown</span>
        </div>

        {projects.map((project, i) => (
          <div
            className={`project reveal${i % 2 === 1 ? " reverse" : ""}`}
            key={project._id}
          >
            <div className="project-img-wrap">
              {project.image && (
                <Image
                  className="project-img"
                  src={urlFor(project.image).width(900).height(1125).url()}
                  alt={`${project.title} render`}
                  fill
                  sizes="(max-width: 820px) 100vw, 50vw"
                />
              )}
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
        <h2>{renderEmphasis(contactHeadline)}</h2>
        <a className="cta" href={`mailto:${contactEmail}`}>
          Start a project — {contactEmail}
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
