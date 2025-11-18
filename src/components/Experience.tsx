import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "USAA",
    description: "Developed reusable UI components and ensured accessibility compliance.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.usaa.mobile.android.usaa"
  },
  {
    company: "Major League Baseball",
    description: "Wrote modular code for Android across multiple devices in an agile setting.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bamnetworks.mobile.android.gameday.atbat"
  },
  {
    company: "Quantum Health",
    description: "Enhanced user engagement & app performance, and automated CI/CD workflows.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.quantumhealth.mobileapp"
  },
  {
    company: "ZenKey",
    description: "Built and debugged a multi-factor authentication app with SDK integrations.",
    playStoreUrl: null
  },
  {
    company: "Insulet",
    description: "Developed secure SDKs for healthcare solutions in a regulated environment.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.insulet.myblue.pdm"
  },
  {
    company: "Nike",
    description: "Implemented workout sharing and notifications for a global user base.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nike.ntc"
  },
  {
    company: "Calculus Labs",
    description: "Led architecture transition from Java to Kotlin w/ automation and testing.",
    playStoreUrl: null
  },
  {
    company: "Viewlift",
    description: "Co-created a popular video streaming app with advanced playback features.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.viewlift.hoichoi"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-5 bg-card border-border hover:border-primary/50 transition-smooth group hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-smooth">
                  {exp.company}
                </h3>
                {exp.playStoreUrl && (
                  <a 
                    href={exp.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
