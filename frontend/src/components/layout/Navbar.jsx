import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_design-construct-9/artifacts/9m6xo1ee_BrynLogo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={LOGO_URL}
              alt="BRYN - Architecture | Construction | Interior"
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md relative ${
                  isScrolled
                    ? isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                    : isActive(item.href)
                    ? "text-primary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8147860219"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>8147860219</span>
            </a>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`${
                  isScrolled
                    ? "text-foreground hover:bg-primary/10"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="flex flex-col h-full pt-8">
                <div className="flex items-center justify-between mb-8">
                  <img
                    src={LOGO_URL}
                    alt="BRYN"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <nav className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                        isActive(item.href)
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-8 border-t border-border">
                  <a
                    href="tel:8147860219"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">8147860219</span>
                  </a>
                  <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
