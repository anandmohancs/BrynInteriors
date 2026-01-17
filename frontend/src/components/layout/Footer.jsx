import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Civil Work",
    "Interior Fit-Out",
    "Electrical Work",
    "HVAC Systems",
    "Turnkey Solutions",
  ];

  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">BRYN</h3>
              <p className="text-sm text-primary-foreground/60 uppercase tracking-wider">
                Construction & Interiors
              </p>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Transforming spaces into extraordinary experiences. We deliver turnkey interior solutions for commercial, residential, and hospitality projects.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary-foreground hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=106,House of lords, St mark's road, Bengaluru - 560001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>#106, House of Lords, St Mark's Road, Bengaluru - 560001</span>
              </a>
              <a
                href="tel:8147860219"
                className="flex gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>8147860219</span>
              </a>
              <a
                href="mailto:care@bryninteriors.com"
                className="flex gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>care@bryninteriors.com</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-medium mb-3">Subscribe to our newsletter</h5>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button size="icon" className="bg-primary hover:bg-primary/80 flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-primary-foreground/10" />
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>
            © {currentYear} BRYN Construction & Interiors Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
