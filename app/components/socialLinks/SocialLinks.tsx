import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
} from "~/components/icons";

const socialLinks = [
  {
    href: "https://github.com/dimterion",
    label: "GitHub",
    icon: <GithubIcon />,
  },
  {
    href: "https://www.linkedin.com/in/dmitrii-p",
    label: "LinkedIn",
    icon: <LinkedinIcon />,
  },
  {
    href: "https://www.instagram.com/dimterion",
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    href: "mailto:your-email@example.com",
    label: "Email",
    icon: <MailIcon />,
    external: false,
  },
];

export default function SocialLinks() {
  return (
    <section aria-label="Social links" className="mr-2.5 mb-1 fixed right-0 bottom-0 z-50">
      <ul className="flex flex-col gap-1 md:gap-2.5">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              {...(link.external !== false
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
              className="bg-blue inline-flex h-5 w-5 rotate-45 items-center justify-center border transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 md:h-7 md:w-7"
            >
              <span className="-rotate-45">{link.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
