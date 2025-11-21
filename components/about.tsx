"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function About() {
  const startDate = new Date("2017-06-01")
  const today = new Date()
  const yearsOfExperience = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Senior Android Developer with{" "}
              <span className="font-semibold text-foreground">{yearsOfExperience}+ years</span> of experience in Kotlin,
              Java, and mobile application development. My expertise lies in building scalable, high-performance Android
              apps using modern architecture and tools.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I have worked with major companies like{" "}
              <span className="font-semibold text-foreground">USAA, Major League Baseball, and Nike</span>, delivering
              high-quality mobile experiences. I'm committed to clean code, automated testing, and creating inclusive
              digital experiences through accessibility standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond code, I'm passionate about{" "}
              <span className="font-semibold text-foreground">
                technology, innovation, and creating tools that help people
              </span>
              . I believe in continuous learning and staying updated with the latest in the Android ecosystem.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Info</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Location", value: "Katy, TX, USA", icon: <MapPin size={24} strokeWidth={1.5} /> },
                {
                  label: "Email",
                  value: "Christianmbaba@live.com",
                  link: "mailto:Christianmbaba@live.com",
                  icon: <Mail size={24} strokeWidth={1.5} />,
                },
                {
                  label: "Phone",
                  value: "***-***-9587",
                  link: "tel:***-***-9587",
                  icon: <Phone size={24} strokeWidth={1.5} />,
                },
                {
                  label: "Experience",
                  value: `${yearsOfExperience}+ Years`,
                  icon: <Clock size={24} strokeWidth={1.5} />,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-primary hover:underline text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
