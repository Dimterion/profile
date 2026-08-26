export default function SectionConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col items-center justify-center"
    >
      <div className="h-4 w-px bg-white" />
      <div className="h-2 w-2 rotate-45 border border-white bg-white" />
      <div className="h-4 w-px bg-white" />
    </div>
  );
}
