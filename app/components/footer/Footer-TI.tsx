import Navbar from "../navbar/Navbar";
import SocialLinks from "../SocialLinks/SocialLinks-TI";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between">
      <Navbar />
      <SocialLinks />
    </footer>
  );
}
