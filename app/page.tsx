export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Dmitrii</h1>

      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Developer and technical consultant. I build web applications with
        React, TypeScript, and Next.js.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Projects</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Project list will go here.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Latest posts</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Recent Medium posts will go here.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Contact form will go here.
        </p>
      </section>
    </>
  );
}