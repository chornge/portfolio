"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export const experiences = [
  {
    title: "Android Software Engineer",
    company: "Freelance",
    period: "01/2024 - Present",
    location: "Remote (Houston, Texas)",
    highlights: [
      "Develop and maintain multiple Android applications using Kotlin or KotlinMultiPlatform with strong focus on clean, scalable code.",
      "Implement MVVM/MVI architecture and core design patterns such as Singleton, Observer, and Builder to ensure maintainable app structure.",
      "Integrate RESTful APIs with Retrofit and Ktor for efficient data handling using JSON/XML formats.",
      "Utilize Dagger/Hilt for dependency injection to enhance modularity and improve application performance.",
      "Building custom Android UI components and optimized views (Jetpack Compose) for dynamic content rendering.",
    ],
  },
  {
    title: "Senior Android Developer",
    company: "USAA (via Millennium Group)",
    period: "10/2023 - 12/2023",
    location: "Remote (Houston, Texas)",
    highlights: [
      "Helped maintain a center of excellence around reusable components to guarantee a consistent application across USAA's digital platforms for service members, veterans, and their families.",
      "Developed sustainably accessible interfaces that met WCAG accessibility standards.",
      "Created reusable and flexible UI components that scaled across multiple design systems.",
      "Collaborated and worked cross-functionally between design and development.",
      "Kotlin, MVVM, Android Studio, CoRoutines, Flows, Jetpack Compose, GH Actions, Gradle, Git.",
    ],
  },
  {
    title: "Senior Android Developer",
    company: "Major League Baseball (via Apex Systems)",
    period: "02/2023 - 06/2023",
    location: "Remote (Houston, Texas)",
    highlights: [
      "Wrote clean, concise, modular code in an agile environment and supported the Android ecosystem working across multiple devices: GoogleTV, FireTV, TV-Emulators along with their associated dev-options.",
      "Participated in the full lifecycle of software development (requirements gathering, designing, building, testing and maintenance).",
      "Developed native solutions that delivered on product strategy and adhered to established engineering best practices, design guidelines and principles.",
      "Kotlin, MVVM, CLEAN, Android Studio, AndroidTV, FireTV, CoRoutines, Flows, Jetpack Compose, GH Actions, ExoPlayer, Git.",
    ],
  },
  {
    title: "Senior Android Developer",
    company: "Quantum Health (via Gravity IT Resources)",
    period: "05/2022 - 12/2022",
    location: "Remote (Houston, Texas)",
    highlights: [
      "Partnered with Software Engineers, UX/UI, Quality Engineers, Product Owners/Business Analysts to deliver high performing quality customer experiences that were engaging, purposeful and powerful in their simplicity.",
      "Ensured test coverage on sections of code that handled business logic.",
      "Automated deployment workflow to create & run UI tests and Unit tests on Github actions (CI/CD).",
      "Kotlin, MVVM, CLEAN, Android Studio, Hilt, Jetpack Compose, Espresso, Accessibility (WCAG), CoRoutines, Mockk, BrowserStack, Gradle, Git.",
    ],
  },
  {
    title: "Senior Android Engineer",
    company: "ZenKey, LLC (via Insight Global, Inc)",
    period: "07/2021 - 02/2022",
    location: "Remote (Houston, Texas)",
    highlights: [
      "Responsible for building out, adding features and debugging a multi-factor identity authentication/authorization native application.",
      "Ensuring the best possible performance, quality, size and UI. Integrating 3rd party SDKs.",
      "Automating deployment workflow to build, upload and distribute new releases to the carriers, testers and other stakeholders.",
      "Integrating driver’s license/passport scanning & validation tools for strong user validation and IAL2 verification for government entities.",
      "Kotlin, MVI, Android Studio, Hilt, CoRoutines, CircleCI, Figma, AppCenter, Lottie, JUnit, Gradle, Git.",
    ],
  },
  {
    title: "Senior Android Engineer",
    company: "Insulet Corporation",
    period: "01/2021 - 06/2021",
    location: "Remote (Houston, Texas)",
    highlights: [
      "Responsible for building secure smartphone SDKs and cloud-based platform based solutions for a variety of healthcare and Internet of Things (IoT) problems.",
      "Owned software in all phases of the SDLC from architecture and design through deployment and release.",
      "Designed and built out the next generation smart-phone cloud-based platform that can support future patient/device centric products and applications.",
      "Helped launch products in an FCC & FDA regulated industry.",
      "Influenced software engineering best practices within the team. Effectively presented and demonstrated various concepts and solutions to customers, partners, and leadership.",
      "Kotlin, Java, Android Studio, TDD, BLE, Realm, RxJava, CoRoutines, Mockk, Espresso, Bash, Gradle, Git.",
    ],
  },
  {
    title: "Senior Android Software Engineer",
    company: "Nike, Inc (via KForce)",
    period: "07/2019 - 06/2020",
    location: "Beaverton, Oregon",
    highlights: [
      "Implemented workout sharing that allows millions of global weekly active users to be able to share workouts on their social media accounts.",
      "Implemented push notifications for users to see newly earned achievements that unlocks after completing workouts.",
      "Implemented A/B test & experiment to gather paywall metrics and improve customer subscription experience for users in EMEA, Japan & US.",
      "Implemented Onboarding UI with video player loop for a polished first-time user experience.",
      "Kotlin, MVVM, Android Studio, Room, CoRoutines, ExoPlayer, Optimizely, Mockk, NewRelic, Bash, Gradle, Git.",
    ],
  },
  {
    title: "Lead Android Developer",
    company: "Calculus Laboratories, Inc (Unonimous)",
    period: "02/2018 - 07/2019",
    location: "Remote (Houston, Texas)",
    highlights: [
      "Provided development estimates and participated in feature requirement gatherings as well as project and test planning.",
      "Contributed to the architecture and design (architecture, design patterns, reliability and scaling) of the system.",
      "Responsible for converting codebase from no architecture to MVP and from Java to Kotlin.",
      "Identified areas in need of refactor or modularity to help maintain code quality, code organization, automation and testing.",
      "Kotlin, Java, MVVM, MVP, Android Studio, SQLite, Firebase (Cloud Messaging, Test Labs), Mockito, Gradle, Git.",
    ],
  },
  {
    title: "Senior Android Developer",
    company: "Viewlift, Inc (via Mobile Apps Company)",
    period: "06/2017 - 12/2017",
    location: "Manhattan, New York",
    highlights: [
      "Co-created a video and music streaming application with 10,000,000+ installs.",
      "Responsible for “Youtube-like” draggable video player with Picture-In-Picture as well as auto-rotation based on user’s screen orientation.",
      "Implemented pausing and resuming of audio/video downloads.",
      "Collaborated with cross-team of developers, testers, designers and stakeholders.",
      "Java, MVP, Android Studio, Glide, Realm, ExoPlayer, Espresso, Mockito, Chromecast, RxJava, Gradle, Git.",
    ],
  },
  {
    title: "Android Developer",
    company: "Freelance",
    period: "12/2014 - 06/2017",
    location: "Houston, Texas",
    highlights: [
      "Developed various applications available on Google Play Store",
      "Java, MVP, Eclipse, Android Studio, Azure, Fastlane, Dagger, ButterKnife, Firebase (Authentication, Database), JUnit, RxJava, Gradle, Git",
    ],
  },
]

export default function Experience() {
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experience
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
          {experiences.map((exp, index) => (
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
                    <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time>{exp.period}</time>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
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
                      <span>{highlight}</span>
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
