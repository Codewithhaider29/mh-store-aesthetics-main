import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import Logo from './ui/Logo';  // Import the Logo Component

const Footer: React.FC = () => {
  return (
    <footer className="bg-mh-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            {/* Logo in the Brand section */}
            <Link to="/">
              <Logo className="h-10 mb-4" /> {/* Render Logo Component */}
            </Link>
            <p className="mb-4 text-gray-400">
              Experience premium products with elegant design and exceptional quality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-mh-pink transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-mh-pink transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-mh-pink transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="hover:text-mh-pink transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/watches"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Watches
                </Link>
              </li>
              <li>
                <Link
                  to="/earbuds"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Earbuds
                </Link>
              </li>
              <li>
                <Link
                  to="/bags"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bags
                </Link>
              </li>
              <li>
                <Link
                  to="/neckbands"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Neckbands
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/sales"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sales & Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
  <Link
    to="/reviews"
    className="text-gray-400 hover:text-white transition-colors"
  >
    Reviews
  </Link>
</li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/return-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Return Policy
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none w-full"
                />
                <button className="bg-mh-pink text-mh-black-dark px-4 rounded-r hover:bg-mh-pink-dark transition-colors">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MH Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
