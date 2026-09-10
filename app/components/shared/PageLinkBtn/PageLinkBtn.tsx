import { Link } from "react-router";
import type { PageLinkBtnProps } from "~/types";

export default function PageLinkBtn({ link, label }: PageLinkBtnProps) {
  return (
    <Link
      to={link}
      className="bg-dark-blue hover:border-gold hover:text-gold mx-auto w-full max-w-80 min-w-0 border px-4 py-2 text-center text-xs transition hover:scale-95 md:text-sm"
    >
      {label}
    </Link>
  );
}
