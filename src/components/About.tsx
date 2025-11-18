import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="pt-8 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <Card className="p-8 bg-card border-border hover:border-primary/50 transition-smooth">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">
                Bachelor of Science, Computer Science
              </p>
              <p className="text-sm text-muted-foreground">
                Sam Houston State University (2014)
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
