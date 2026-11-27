type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>

      {description ? (
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}