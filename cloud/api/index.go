package handler

import (
	"html/template"
	"net/http"
	"slices"

	"github.com/gin-gonic/gin"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		allowedOrigins := []string{"https://portfolio-mauve-one-j7kh9fwul9.vercel.app"}

		// Get origin from request header
		origin := c.Request.Header.Get("Origin")
		if slices.Contains(allowedOrigins, origin) {
			c.Writer.Header().Set("Access-Control-Allow-Origin", origin)
		}

		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		// Handle preflight requests
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	}
}

func Handler(w http.ResponseWriter, r *http.Request) {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	router.Use(CORSMiddleware())

	router.Static("/../static", "../../static")
	router.StaticFile("/favicon.ico", "../../static/favicon.ico")

	router.GET("/", ProfileHandler)

	router.ServeHTTP(w, r)
}

func ProfileHandler(c *gin.Context) {
	tmpl := template.Must(template.ParseFiles("../../templates/index.html"))

	data := PageData{
		Name:          "Christian Mbaba",
		Email:         "Christianmbaba@live.com",
		Github:        "https://www.github.com/chornge",
		LinkedIn:      "https://www.linkedin.com/in/christian-mbaba-6095ba174",
		StackOverflow: "https://www.stackoverflow.com/users/1008011/chornge",
		Education:     "Bachelor of Science, Computer Science - Sam Houston State University (2014)",
		CalendlyURL:   "https://www.calendly.com/christianmbaba/30min",
		WorkProjects: []WorkProject{
			{
				Company:     "USAA",
				Role:        "Senior Android Developer",
				Period:      "Oct 2023 – Dec 2023",
				Description: "Developed reusable UI components and ensured accessibility compliance.",
				Stack:       "Kotlin, MVVM, Android Studio, CoRoutines, Flows, Jetpack Compose, GH Actions, Gradle, Git",
				AppLink:     "https://play.google.com/store/apps/details?id=com.usaa.mobile.android.usaa",
			},
			{
				Company:     "Major League Baseball",
				Role:        "Senior Android Developer",
				Period:      "Feb 2023 – Jun 2023",
				Description: "Wrote modular code for Android across multiple devices in an agile setting.",
				Stack:       "Kotlin, MVVM, CLEAN, Android Studio, AndroidTV, FireTV, CoRoutines, Flows, Jetpack Compose, GH Actions, ExoPlayer",
				AppLink:     "https://play.google.com/store/apps/details?id=com.bamnetworks.mobile.android.gameday.atbat",
			},
			{
				Company:     "Quantum Health",
				Role:        "Senior Android Developer",
				Period:      "May 2022 – Dec 2022",
				Description: "Enhanced user engagement & app performance, and automated CI/CD workflows.",
				Stack:       "Kotlin, MVVM, CLEAN, Android Studio, Hilt, Jetpack Compose, Espresso, Accessibility (WCAG), CoRoutines, Mockk",
				AppLink:     "https://play.google.com/store/apps/details?id=com.quantumhealth.mobileapp",
			},
			{
				Company:     "ZenKey",
				Role:        "Senior Android Engineer",
				Period:      "Jun 2021 – Feb 2022",
				Description: "Built and debugged a multi-factor authentication app with SDK integrations.",
				Stack:       "Kotlin, MVI, Android Studio, Hilt, CoRoutines, CircleCI, Figma, AppCenter, Lottie, JUnit, Gradle, Git",
				AppLink:     "https://play.google.com/store/apps/details?id=com.verizon.ccid.projectverify",
			},
			{
				Company:     "Insulet",
				Role:        "Senior Android Engineer",
				Period:      "Jan 2021 – Jun 2021",
				Description: "Developed secure SDKs for healthcare solutions in a regulated environment.",
				Stack:       "Kotlin, Java, Android Studio, TDD, BLE, Realm, RxJava, CoRoutines, Mockk, Espresso, Bash, Gradle, Git",
				AppLink:     "https://play.google.com/store/apps/details?id=com.insulet.myblue.pdm",
			},
			{
				Company:     "Nike",
				Role:        "Senior Android Software Engineer",
				Period:      "Jun 2019 – Jun 2020",
				Description: "Implemented workout sharing and notifications for a global user base.",
				Stack:       "Kotlin, MVVM, Android Studio, Room, CoRoutines, ExoPlayer, Optimizely, Mockk, NewRelic, Bash, Gradle, Git",
				AppLink:     "https://play.google.com/store/apps/details?id=com.nike.ntc",
			},
			{
				Company:     "Calculus Labs",
				Role:        "Lead Android Developer",
				Period:      "Feb 2018 – Jun 2019",
				Description: "Led architecture transition from Java to Kotlin w/ automation and testing.",
				Stack:       "Java, Kotlin, MVP, MVVM, Android Studio, SQLite, Firebase (Cloud Messaging, Test Labs), Mockito, Gradle, Git",
				AppLink:     "",
			},
			{
				Company:     "Viewlift",
				Role:        "Senior Android Developer",
				Period:      "Jun 2017 – Dec 2017",
				Description: "Co-created a popular video streaming app with advanced playback features.",
				Stack:       "Java, MVP, Android Studio, Glide, Realm, ExoPlayer, Espresso, Mockito, Chromecast, RxJava, Gradle, Git",
				AppLink:     "https://play.google.com/store/apps/details?id=com.viewlift.hoichoi",
			},
		},
		SideProjects: []SideProject{
			{
				Title:        "Portfolio",
				Description:  "Developer portfolio page with contact info, projects & open source contributions. (LIVE)",
				Technologies: "Microservices, Go, HTML, CSS, Docker, Nginx",
				Link:         "https://github.com/chornge/portfolio",
			},
			{
				Title:        "Audio Epistles",
				Description:  "Grabs a video from any public YouTube playlist, extracts its audio, title, etc & publishes as a podcast. (LIVE)",
				Technologies: "Rust, Node, FFmpeg, Cron, Spotify",
				Link:         "https://github.com/chornge/audio-epistles",
			},
			{
				Title:        "Drone-VAR (SkyJudge)",
				Description:  "A user with \"any\" video drone can detect offsides occurring in realtime during a soccer match. (WIP)",
				Technologies: "Rust, MavLink, Candle, ONNX",
				Link:         "https://github.com/chornge/sky-judge",
			},
			{
				Title:        "Wish and Swish",
				Description:  "Automatically opens a trash can when the word \"KOBE\" is spoken. It aims to make waste disposals hands-free. (WIP)",
				Technologies: "Rust, Raspberry Pi, FFmpeg, Rustpotter-cli, rppal",
				Link:         "https://github.com/chornge/wish_and_swish",
			},
		},
	}

	c.Writer.Header().Set("Content-Type", "text/html; charset=utf-8")
	tmpl.Execute(c.Writer, data)
}

type WorkProject struct {
	Company, Role, Period, Description, Stack, AppLink string
}

type SideProject struct {
	Title, Description, Technologies, Link string
}

type PageData struct {
	Name          string
	Email         string
	Github        string
	LinkedIn      string
	StackOverflow string
	Education     string
	WorkProjects  []WorkProject
	SideProjects  []SideProject
	CalendlyURL   string
}
