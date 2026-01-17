import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Eye,
  Rocket,
  Heart,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring world-class quality in all our projects.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for design drives us to create spaces that inspire and transform lives.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients, ensuring their vision becomes reality.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace cutting-edge solutions and technologies to stay ahead of the curve.",
    },
  ];

  const goals = [
    "To collaborate with our clients to shape growth opportunities",
    "Transform through technology and innovation",
    "Build strong communities through thoughtful design",
    "Drive sustainability in all our projects",
    "Contribute to corporate social responsibility efforts",
    "Shape spaces for a better future",
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1639145044835-ec083afa6ebb?w=1920&auto=format&fit=crop"
            alt="About BRYN"
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
              About Us
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Creating Cutting Edge Spaces
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              BRYN is a well-recognized interior fit-out firm with expertise in commercial, residential, hospitality, retail, healthcare, and beauty projects.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?w=800&auto=format&fit=crop"
                  alt="BRYN Interior Design"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team combines talents and vast experiences to create spaces that can be truly "Cutting edge." The difference between BRYN and our competitors is that the person you meet on day one is actively involved until the end of the project.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are also known to deliver turnkey solutions, handling everything from concept development to final execution. Our commitment to excellence has made us the preferred partner for leading corporations and brands across India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-border hover:bg-muted">
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="border-0 shadow-elegant bg-card">
              <CardContent className="p-8 lg:p-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To establish new benchmarks in interior design through innovative workplaces and people-centred spaces that help businesses succeed.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-0 shadow-elegant bg-card">
              <CardContent className="p-8 lg:p-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To improve workplace environment through smart design solutions that boost productivity, encourage teamwork, and reflect company culture. We ensure each project makes the best use of space while creating engaging work and living areas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Our Values
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground">
              Our core values guide every decision we make and every space we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group border-0 bg-card shadow-md hover:shadow-elegant transition-all duration-500 text-center"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 lg:py-28 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                Our Goals
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Shaping Growth & Building Communities
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                BRYN's purpose remains steadfast now more than ever. We are committed to shaping your space for a better future.
              </p>
              <ul className="space-y-4">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/80">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&auto=format&fit=crop"
                  alt="BRYN Goals"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's create something extraordinary together. Contact us to discuss your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted px-8">
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
