import Navbar from "../Navbar/Navbar-TI";
import SocialLinks from "../SocialLinks/SocialLinks-TI";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 flex justify-between md:items-center">
      <Navbar />
      <SocialLinks />
    </footer>
  );
}
