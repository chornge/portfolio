import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in working together or have a project in mind? 
          Download my resume or book a session to discuss opportunities.
        </p>

        <Card className="p-8 bg-card border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="glow-primary" asChild>
              <a
                href="/christian-mbaba-resume.pdf"
                download
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.calendly.com/christianmbaba/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Book a Session
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
