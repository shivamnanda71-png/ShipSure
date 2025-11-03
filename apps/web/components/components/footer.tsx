import React from "react";
import { Twitter, Linkedin, Github, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    pages: ["All Products", "Studio", "Clients", "Pricing", "Blog"],
    socials: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socialIcons = [
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Github, label: "GitHub" },
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg transform rotate-45"></div>
              <span className="text-xl font-semibold">Ship Sure</span>
            </div>
            <p className="text-gray-700 font-medium leading-relaxed">
              Ship it. Centralise feedback automatically.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Socials</h3>
            <ul className="space-y-3">
              {footerLinks.socials.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© ship sure</p>

          <div className="flex items-center gap-4">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
