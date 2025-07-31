
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">AutoCurex</h2>
          <p>
            Your trusted car service partner for oil changes, diagnostics,
            repairs, and more. Drive safe, drive smart with AutoCurex.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 p-2 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 p-2 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 p-2 rounded-full"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>Engine Diagnostics</li>
            <li>Oil Change</li>
            <li>Brake Repair</li>
            <li>Tire Rotation</li>
            <li>Battery Replacement</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+880 1234 567 890</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>support@autocurex.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span>123 Service Rd, Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AutoCurex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
