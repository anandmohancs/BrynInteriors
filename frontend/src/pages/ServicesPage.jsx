import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Zap,
  PaintBucket,
  Hammer,
  Wind,
  Wifi,
  GlassWater,
  Shield,
  Megaphone,
  Droplets,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Building2,
      title: "Civil Work",
      description:
        "Complete civil construction services including structural work, foundations, and building modifications. We ensure quality construction that stands the test of time.",
      features: ["Structural Work", "Foundations", "Building Modifications", "Quality Assurance"],
    },
    {
      icon: Zap,
      title: "Electrical",
      description:
        "Comprehensive electrical installations and solutions. From lighting design to power distribution, we handle all electrical requirements for commercial and residential spaces.",
      features: ["Lighting Design", "Power Distribution", "Safety Systems", "Smart Controls"],
    },
    {
      icon: PaintBucket,
      title: "Painting",
      description:
        "Professional painting services with premium finishes. We use high-quality materials and expert techniques to deliver flawless results.",
      features: ["Interior Painting", "Exterior Finishes", "Texture Work", "Premium Materials"],
    },
    {
      icon: Hammer,
      title: "Carpentry",
      description:
        "Custom carpentry and woodwork solutions. From bespoke furniture to intricate millwork, our craftsmen deliver excellence in every detail.",
      features: ["Custom Furniture", "Millwork", "Cabinetry", "Wood Flooring"],
    },
    {
      icon: Wind,
      title: "HVAC & Exhaust System",
      description:
        "Complete HVAC solutions for optimal climate control. We design and install efficient heating, ventilation, and air conditioning systems.",
      features: ["Air Conditioning", "Ventilation", "Exhaust Systems", "Energy Efficiency"],
    },
    {
      icon: Wifi,
      title: "Data & Voice Networking",
      description:
        "Modern networking infrastructure for seamless connectivity. We provide structured cabling and network solutions for businesses of all sizes.",
      features: ["Structured Cabling", "Network Setup", "Voice Systems", "IT Infrastructure"],
    },
    {
      icon: GlassWater,
      title: "Glass Work & Partition",
      description:
        "Elegant glass solutions and partition systems. We create modern, light-filled spaces with high-quality glass installations.",
      features: ["Glass Partitions", "Facades", "Doors & Windows", "Decorative Glass"],
    },
    {
      icon: Shield,
      title: "FAS & Security Systems",
      description:
        "Advanced fire alarm and security systems for complete protection. We install state-of-the-art safety solutions for peace of mind.",
      features: ["Fire Alarm Systems", "CCTV", "Access Control", "Monitoring Systems"],
    },
    {
      icon: Megaphone,
      title: "Branding & Signage",
      description:
        "Professional branding and signage solutions. We help businesses create impactful visual identities within their spaces.",
      features: ["Interior Signage", "Brand Integration", "Wayfinding", "Display Systems"],
    },
    {
      icon: Droplets,
      title: "Plumbing",
      description:
        "Complete plumbing solutions for all project types. From basic installations to complex systems, we ensure reliable water management.",
      features: ["Pipe Installation", "Fixtures", "Drainage Systems", "Water Management"],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1768321902156-9358b5373d0a?w=1920&auto=format&fit=crop"
            alt="Our Services"
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
              Our Services
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Comprehensive Interior Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              From concept to completion, we offer a full range of services to transform your spaces into extraordinary environments.
            </p>
          </div>
        </div>
      </section>

      {/* Turnkey Solutions */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                Turnkey Solutions
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                End-to-End Project Management
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                BRYN is known for delivering turnkey solutions. We handle every aspect of your project from initial concept development through to final handover, ensuring a seamless experience.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our integrated approach means you have a single point of contact throughout your project, eliminating coordination hassles and ensuring consistent quality.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Design & Planning", "Project Management", "Construction", "Quality Control", "Timely Delivery", "After-Sales Support"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1638799869566-b17fa794c4de?w=800&auto=format&fit=crop"
                  alt="Turnkey Solutions"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              What We Offer
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              We provide comprehensive interior fit-out services to meet all your project needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-0 bg-card shadow-md hover:shadow-elegant transition-all duration-500"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-secondary/50 text-secondary-foreground text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Our Expertise
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sectors We Serve
            </h2>
            <p className="text-muted-foreground">
              We have expertise across multiple sectors, delivering tailored solutions for each.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Commercial", "Residential", "Hospitality", "Retail", "Healthcare", "Beauty & Spa"].map((sector, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Need a Customized Solution?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
            Every project is unique. Let's discuss your specific requirements and create a tailored solution for your space.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8">
            <Link to="/contact">
              Get a Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
