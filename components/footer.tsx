"use client"

import { Analytics } from "@/lib/analytics"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <nav>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  onClick={() => Analytics.navigationClicked("about", "footer")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  onClick={() => Analytics.navigationClicked("skills", "footer")}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  onClick={() => Analytics.navigationClicked("process", "footer")}
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  onClick={() => Analytics.navigationClicked("experience", "footer")}
                >
                  Experience
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/chornge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="GitHub (opens in new window)"
                  onClick={() => Analytics.socialLinkClicked("github")}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/christian-mbaba-6095ba174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="LinkedIn (opens in new window)"
                  onClick={() => Analytics.socialLinkClicked("linkedin")}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/chornge_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="Instagram (opens in new window)"
                  onClick={() => Analytics.socialLinkClicked("instagram")}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.calendly.com/christianmbaba/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="Book a Session (opens in new window)"
                  onClick={() => Analytics.sessionBookingClicked()}
                >
                  Book a Session
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="font-bold mb-4">Skills</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Kotlin & Java</li>
              <li>Jetpack Compose</li>
              <li>Android SDK</li>
              <li>Clean Architecture</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Location</h3>
            <p className="text-sm text-muted-foreground">Katy, TX, USA</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Christian Mbaba. All rights reserved.</p>
          <p>Crafted with Joy, Coffee & Experience</p>
        </div>
      </div>
    </footer>
  )
}
