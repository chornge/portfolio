import posthog from "posthog-js"

export type SocialPlatform = "github" | "linkedin" | "instagram"
export type Section = "hero" | "about" | "skills" | "experience" | "projects" | "contact" | "footer"

export const Analytics = {
  // Resume events
  resumeDownloaded: (source: "hero" | "contact") => {
    posthog.capture("resume_downloaded", { source })
  },

  // Booking events
  sessionBookingClicked: () => {
    posthog.capture("session_booking_clicked", {
      calendly_url: "https://www.calendly.com/christianmbaba/30min",
    })
  },

  // Theme events
  themeToggled: (theme: "light" | "dark") => {
    posthog.capture("theme_toggled", { theme })
  },

  // Social link clicks
  socialLinkClicked: (platform: SocialPlatform) => {
    posthog.capture("social_link_clicked", { platform })
  },

  // Section viewed (for scroll tracking)
  sectionViewed: (section: Section) => {
    posthog.capture("section_viewed", { section })
  },

  // Email clicked
  emailClicked: () => {
    posthog.capture("email_clicked", { email: "Christianmbaba@live.com" })
  },

  // Skill hovered
  skillHovered: (skill: string, category: string) => {
    posthog.capture("skill_hovered", { skill, category })
  },

  // Navigation clicked
  navigationClicked: (destination: string, source: "header" | "footer" | "mobile_menu") => {
    posthog.capture("navigation_clicked", { destination, source })
  },

  // Time on page (called on page unload)
  timeOnPage: (durationSeconds: number) => {
    posthog.capture("time_on_page", { duration_seconds: durationSeconds })
  },
}
