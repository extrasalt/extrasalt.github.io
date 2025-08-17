import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FaGolang, FaNodeJs, FaReact, FaAws, FaJava } from "react-icons/fa6";
import { SiKubernetes, SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom";

const services = [
  {
    title: "AI & ML Workflow Integration",
    description: "Driving AI-first initiatives by designing and integrating advanced machine learning workflows into core products to automate and innovate.",
  },
  {
    title: "Scalable Distributed Systems",
    description: "Architecting and developing robust, large-scale distributed systems using Golang, Kafka, and Temporal for high-performance data processing and workflow automation.",
  },
  {
    title: "Cloud-Native & Kubernetes Strategy",
    description: "Providing architectural guidance and hands-on implementation for modernizing applications and infrastructure using Kubernetes, AWS, and CI/CD best practices.",
  },
];

const projects = [
  {
    title: "Large-Scale Crawling & Parsing Infrastructure",
    description: "Engineered a distributed system to monitor and extract data from hundreds of thousands of government sources, processing over 20 million pages daily.",
  },
  {
    title: "Community Leadership & Open Source",
    description: "Organized and presented at major tech conferences like Kubernetes Days and Chaos Carnival. Hosted and produced the podcast.yaml series to discuss cloud-native trends.",
  },
  {
    title: "Modern Web Platform Development",
    description: "Led the modernization of legacy applications into a high-performance platform using React, Bun, and shadcn/ui, significantly improving internal tooling and reliability.",
  },
];

const techIcons = [
    { Icon: FaGolang, name: "Go" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: FaReact, name: "React" },
    { Icon: SiKubernetes, name: "Kubernetes" },
    { Icon: FaAws, name: "AWS" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: FaJava, name: "Java" },
];

export function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto p-8 md:p-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lead Machine Learning Engineer & Distributed Systems Architect
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6 mb-8">
            I specialize in building <span className="bg-accent text-primary p-1 rounded-md">scalable</span> AI-driven platforms and helping teams navigate the complexities of modern cloud-native infrastructure. Let's build something <span className="bg-accent text-primary p-1 rounded-md">remarkable</span> together.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
                <a href="https://www.linkedin.com/in/extrasalt/">Book a Consultation</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <Link to="/resume">View Full Resume</Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Consulting Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-accent/80 rounded-lg px-4 border border-accent">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects & Contributions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.title} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12">Core Technologies</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {techIcons.map(({ Icon, name }) => (
                    <div key={name} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                        <Icon className="w-12 h-12" />
                        <span className="text-sm">{name}</span>
                    </div>
                ))}
            </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="text-center py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Tech?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how my expertise in AI, distributed systems, and cloud-native solutions can help you achieve your goals.
            </p>
            <Button size="lg" asChild>
                <a href="https://www.linkedin.com/in/extrasalt/">Get in Touch</a>
            </Button>
        </section>
      </div>
    </div>
  );
}

export default Home;