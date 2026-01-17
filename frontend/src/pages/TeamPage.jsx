import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const TeamPage = () => {
  const team = [
    {
      name: "Chenna Hoskera",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
      description:
        "Leading BRYN with vision and expertise, Chenna brings years of industry experience to drive the company's growth and excellence.",
    },
    {
      name: "Roshini Revenker",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
      description:
        "Our creative visionary who transforms concepts into stunning designs that exceed client expectations.",
    },
    {
      name: "Sunil Nargeral",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
      description:
        "Ensuring seamless project execution from start to finish, Sunil manages timelines and quality with precision.",
    },
    {
      name: "Suchitha S Patil",
      role: "Procurement",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
      description:
        "Managing vendor relationships and material sourcing to ensure quality and cost-effectiveness.",
    },
    {
      name: "Rahul Hosatti",
      role: "Accountant",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop",
      description:
        "Handling financial operations with accuracy and ensuring smooth business transactions.",
    },
    {
      name: "Devananda Patil",
      role: "Site Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      description:
        "Overseeing on-site operations to ensure projects are executed according to specifications.",
    },
    {
      name: "Praveen",
      role: "Site Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
      description:
        "Ensuring quality control and timely execution at project sites with dedicated supervision.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1920&auto=format&fit=crop"
            alt="Our Team"
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
              Our Team
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Meet the Experts Behind BRYN
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Our talented team combines expertise and passion to deliver exceptional interior solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              The BRYN Family
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-muted-foreground">
              The person you meet on day one is actively involved until the end of the project.
            </p>
          </div>

          {/* Leadership */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {team.slice(0, 3).map((member, index) => (
              <Card
                key={index}
                className="group border-0 shadow-md hover:shadow-elegant transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:care@bryninteriors.com"
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Team Members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.slice(3).map((member, index) => (
              <Card
                key={index}
                className="group border-0 shadow-md hover:shadow-elegant transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Join Our Team
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Want to Be Part of BRYN?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're always looking for talented individuals who share our passion for creating extraordinary spaces. If you're driven, creative, and want to make a difference, we'd love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8">
              <a href="mailto:care@bryninteriors.com">
                Send Your Resume
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Our team is ready to bring your vision to life. Contact us today to discuss your next interior project.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
