import { SectionHeading } from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Dmitrii
        </h1>

        <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-400">
          Developer and technical consultant. I build web applications with
          React, TypeScript, and Next.js.
        </p>
      </header>

      <section className="mt-16">
        <SectionHeading
          title="Projects"
          description="A selection of web applications and projects I have built."
        />

        <p className="text-neutral-600 dark:text-neutral-400">
          Project list will go here.
        </p>
      </section>

      <section className="mt-16">
        <SectionHeading
          title="Latest posts"
          description="Recent articles published on Medium."
        />

        <p className="text-neutral-600 dark:text-neutral-400">
          Recent Medium posts will go here.
        </p>
      </section>

      <section className="mt-16">
        <SectionHeading
          title="Contact"
          description="Get in touch about a project, question, or opportunity."
        />

        <p className="text-neutral-600 dark:text-neutral-400">
          Contact form will go here.
        </p>
      </section>
    </>
  );
}