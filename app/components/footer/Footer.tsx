import Navbar from "../Navbar/Navbar";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 flex justify-between md:items-center">
      <Navbar />
      <SocialLinks />
    </footer>
  );
}
