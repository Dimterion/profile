import Navbar from "../navbar/Navbar";
import SocialLinks from "../social/SocialLinks";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 bg-gray-200">
      <Navbar />
      <SocialLinks />
    </footer>
  );
}
