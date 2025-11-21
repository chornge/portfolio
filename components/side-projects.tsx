"use client"

import { motion } from "framer-motion"

export const sideProjects = [
  {
    title: "Kmpli",
    status: "In Production",
    tech: "Kotlin • Compose Multiplatform • Gradle • Ktor • Amper • GitHub Actions",
    description: [
      "Generate Kotlin/Compose Multiplatform projects with custom configurations & tests from the command-line.",
    ],
  },
  {
    title: "Wish and Swish",
    status: "Ongoing",
    tech: "Rust • Raspberry Pi • FFmpeg • Rustpotter-cli • rppal",
    description: [
      "Makes waste disposals hands-free by automatically opening a trash bin when the word 'KOBE' is spoken.",
    ],
  },
  {
    title: "Drone-VAR (SkyJudge)",
    status: "Coming Soon",
    tech: "Rust • MavLink • Candle • ONNX",
    description: ["A user with 'any' video drone can detect offsides occurring in realtime during a soccer match."],
  },
]

export default function SideProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="side-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Side{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sideProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors"
                whileHover={{ paddingLeft: 32 }}
              >
                <motion.div
                  className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full"
                  aria-hidden="true"
                  whileHover={{ scale: 1.3 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{project.title}</h3>
                    <p className="text-primary font-medium">{project.status}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{project.tech}</span>
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {project.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{desc}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
