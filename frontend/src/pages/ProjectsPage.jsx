import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, ExternalLink } from "lucide-react";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Diageo PTC & TC Lab",
      category: "Commercial",
      client: "Diageo",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
      description:
        "We exist in passionate pursuit of good for positive change in the world by producing. At our roots, we are near discovery and evolution, impacting where and how to do things better. While we respect tradition, we elevate it through new ways.",
      services: ["Civil Work", "Electrical", "HVAC", "Interiors"],
    },
    {
      id: 2,
      title: "AbInbev - JLL Cafeteria",
      category: "Hospitality",
      client: "JLL",
      image: "https://images.unsplash.com/photo-1606836576983-8b458e75221d?w=800&auto=format&fit=crop",
      description:
        "A modern cafeteria space designed for collaboration and relaxation. The project features contemporary design elements with functional spaces for dining and informal meetings.",
      services: ["Interior Design", "Carpentry", "Electrical", "Painting"],
    },
    {
      id: 3,
      title: "SUTO Cafe",
      category: "Retail",
      client: "SUTO",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&auto=format&fit=crop",
      description:
        "A vibrant cafe interior designed to create an inviting atmosphere for customers. The space combines modern aesthetics with comfortable seating arrangements.",
      services: ["Interior Fit-Out", "Branding", "Electrical", "Plumbing"],
    },
    {
      id: 4,
      title: "HSBC Bank",
      category: "Commercial",
      client: "HSBC",
      image: "https://images.unsplash.com/photo-1648462908676-8305f0eff8e0?w=800&auto=format&fit=crop",
      description:
        "A professional banking environment designed for customer comfort and operational efficiency. The space features modern security systems and elegant interiors.",
      services: ["Civil Work", "Security Systems", "Electrical", "Glass Work"],
    },
    {
      id: 5,
      title: "Phoenix MarketCity",
      category: "Retail",
      client: "Phoenix MarketCity",
      image: "https://images.unsplash.com/photo-1651169611357-7ded6b5eeda5?w=800&auto=format&fit=crop",
      description:
        "Retail fit-out projects within one of Bangalore's premier shopping destinations. Multiple store interiors designed for optimal customer experience.",
      services: ["Retail Fit-Out", "Electrical", "Glass Partitions", "Signage"],
    },
    {
      id: 6,
      title: "Biocon Biologics Office",
      category: "Commercial",
      client: "Biocon Biologics",
      image: "https://images.unsplash.com/photo-1667375185194-57deec7e7a00?w=800&auto=format&fit=crop",
      description:
        "Modern office space designed for a leading biopharmaceutical company. The design incorporates collaborative spaces and state-of-the-art facilities.",
      services: ["Interior Design", "HVAC", "Data Networking", "Civil Work"],
    },
  ];

  const categories = ["all", "Commercial", "Hospitality", "Retail"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

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

  const retailClients = [
    "SUTO",
    "Booster Juice",
    "KFC",
    "Toon KIDZ",
    "Domino's Pizza",
    "LORD of DRINKS",
    "FOSSIL",
    "PETER ENGLAND",
    "Zudio",
    "Reebok",
    "FirstCry",
    "Pizza Hut",
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1638885930125-85350348d266?w=1920&auto=format&fit=crop"
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/20 text-primary-foreground border-0"
            >
              Our Portfolio
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Projects That Inspire
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Explore our portfolio of completed projects across commercial, hospitality, and retail sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={`capitalize ${
                  filter === cat
                    ? "bg-primary hover:bg-primary/90"
                    : "border-border hover:bg-muted"
                }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer border-0 shadow-md hover:shadow-elegant transition-all duration-500 overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="mb-2 bg-primary/20 text-primary-foreground border-0">
                      {project.category}
                    </Badge>
                    <h3 className="font-display text-xl font-semibold text-primary-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm mt-1">
                      Client: {project.client}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedProject && (
            <>
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-8">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-primary/10 text-primary border-0">
                      {selectedProject.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Client: {selectedProject.client}
                    </span>
                  </div>
                  <DialogTitle className="font-display text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
                  {selectedProject.description}
                </p>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Clients Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Our Clients
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Who We Collaborate With
            </h2>
            <p className="text-muted-foreground">
              We're proud to work with industry-leading organizations across corporate and retail sectors.
            </p>
          </div>

          {/* Corporate Clients */}
          <div className="mb-12">
            <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">
              Corporate Clients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {corporateClients.map((client, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 flex items-center justify-center h-20 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-sm text-center text-foreground">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Retail Clients */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">
              Retail Clients
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {retailClients.map((client, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 flex items-center justify-center h-16 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-xs text-center text-foreground">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
