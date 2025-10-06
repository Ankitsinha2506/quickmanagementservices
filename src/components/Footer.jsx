import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/QMSLogo-Photoroom.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* Logo + Address */}
          <div className="md:w-1/3">
            <Link to="/">
              <img src={logo} alt="QMS Logo" className="w-36 mb-4" />
            </Link>
            <p className="text-sm">
              <strong>Address:</strong> 203, Changbhale Heights, Jawalkar Nagar, near Kalpataru Society, Phase-3, Pimple Gurav, Pune, Maharashtra 411061
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/1" className="hover:text-blue-500 transition-colors">Blockchain Services</Link></li>
              <li><Link to="/services/2" className="hover:text-blue-500 transition-colors">Big Data Analysis</Link></li>
              <li><Link to="/services/3" className="hover:text-blue-500 transition-colors">Cloud Computing</Link></li>
              <li><Link to="/services/4" className="hover:text-blue-500 transition-colors">IoT Solutions</Link></li>
              <li><Link to="/services/5" className="hover:text-blue-500 transition-colors">Web App Development</Link></li>
              <li><Link to="/services/6" className="hover:text-blue-500 transition-colors">Mobile App Development</Link></li>
            </ul>
          </div>

          {/* Contact Info + Socials */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>Email: <a href="mailto:hr@quickmanagementservices.com" className="hover:text-blue-500 transition-colors">hr@quickmanagementservices.com</a></li>
              <li>Phone: <a href="tel:+917066521234" className="hover:text-blue-500 transition-colors">+91 7066521234</a></li>
            </ul>
            <div className="flex gap-4 mt-2 text-gray-400">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaLinkedinIn /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaInstagram /></a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {currentYear} Quick Management Services Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
