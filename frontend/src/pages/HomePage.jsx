import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Building2,
  Home,
  Hotel,
  Store,
  Stethoscope,
  Sparkles,
  ChevronRight,
  Award,
  Users,
  Clock,
  Target,
} from "lucide-react";

const HomePage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Building2, value: "100+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Corporate Clients" },
    { icon: Clock, value: "15+", label: "Years Experience" },
    { icon: Award, value: "25+", label: "Industry Awards" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Commercial",
      description: "Transform your office spaces into productive environments that inspire.",
    },
    {
      icon: Home,
      title: "Residential",
      description: "Create stunning living spaces that reflect your personal style.",
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Design memorable experiences for hotels, restaurants, and cafes.",
    },
    {
      icon: Store,
      title: "Retail",
      description: "Build engaging retail environments that captivate customers.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Design functional and calming healthcare facilities.",
    },
    {
      icon: Sparkles,
      title: "Beauty & Spa",
      description: "Create luxurious wellness spaces for ultimate relaxation.",
    },
  ];

  const featuredProjects = [
    {
      title: "Diageo PTC & TC Lab",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    },
    {
      title: "AbInbev - JLL Cafeteria",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1606836576983-8b458e75221d?w=800&auto=format&fit=crop",
    },
    {
      title: "SUTO Cafe",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&auto=format&fit=crop",
    },
  ];

  const corporateClients = [
    "PHOENIX MARKETCITY",
    "Biocon Biologics",
    "GAMES 24 SEVEN",
    "DIAGEO",
    "Syngene",
    "ARCADIS",
    "SKF",
    "JLL",
    "HSBC",
    "Novo Nordisk",
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?w=1920&auto=format&fit=crop"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <Badge
              variant="secondary"
              className="mb-6 bg-primary/20 text-primary-foreground border-0 px-4 py-1.5 animate-fade-in"
            >
              Turnkey Projects
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
              We Shape Your Space for a{" "}
              <span className="text-primary">Better Future</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              BRYN is a well-recognized interior fit-out firm with expertise in commercial, residential, hospitality, retail, healthcare, and beauty projects.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
              >
                <Link to="/projects">
                  View Our Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="reveal text-center opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="reveal opacity-0 relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1638885930125-85350348d266?w=800&auto=format&fit=crop"
                  alt="Modern Interior Design"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              {/* Floating Card */}
              <Card className="absolute -bottom-6 -right-6 lg:-right-12 max-w-[260px] shadow-elegant border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-bold">15+</div>
                      <div className="text-sm text-muted-foreground">Years of Excellence</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The person you meet on day one is actively involved until the end.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="reveal opacity-0">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                About BRYN
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Creating Spaces That Are{" "}
                <span className="text-primary">Cutting Edge</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team combines talents and vast experiences to create spaces that can be truly extraordinary. The difference between BRYN and our competitors is that the person you meet on day one is actively involved until the end of the project.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are also known to deliver turnkey solutions, handling every aspect of your project from concept to completion with meticulous attention to detail.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 group">
                  <Link to="/about">
                    Learn More About Us
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-border hover:bg-muted">
                  <Link to="/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              What We Do
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-muted-foreground">
              From concept to completion, we bring your vision to life with precision and passion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="reveal opacity-0 group border-0 bg-card shadow-md hover:shadow-elegant transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                Our Portfolio
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Featured Projects
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 group">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="reveal opacity-0 group cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="mb-3 bg-primary/20 text-primary-foreground border-0">
                      {project.category}
                    </Badge>
                    <h3 className="font-display text-xl font-semibold text-primary-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 lg:py-28 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Trusted Partners
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who We Collaborate With
            </h2>
            <p className="text-primary-foreground/70">
              We're proud to work with industry-leading organizations across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {corporateClients.map((client, index) => (
              <div
                key={index}
                className="reveal opacity-0 bg-primary-foreground/5 rounded-xl p-6 flex items-center justify-center h-24 hover:bg-primary-foreground/10 transition-colors"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-medium text-sm text-center text-primary-foreground/80">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1668911492786-766a300d744b?w=1920&auto=format&fit=crop"
            alt="Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Let's collaborate to create extraordinary spaces that inspire and elevate. Contact us today to discuss your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
            >
              <a href="tel:8147860219">Call: 8147860219</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
