package main

import (
	"fmt"
	"html/template"

	"github.com/gin-gonic/gin"
)

func main() {
	port := "6501"
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	router.Static("/static", "../static")
	router.StaticFile("/favicon.ico", "../static/favicon.ico")
	router.GET("/", profileHandler)

	fmt.Printf("Server listening on http://0.0.0.0:%s\n", port)
	router.Run(":" + port)
}

func profileHandler(c *gin.Context) {
	tmpl := template.Must(template.ParseFiles("../templates/index.html"))

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
				Company: "USAA",
				Role:    "Senior Android Developer",
				Period:  "Oct 2023 – Dec 2023",
				Stack:   "Kotlin, MVVM, Android Studio, CoRoutines, Flows, Jetpack Compose, GH Actions, Gradle, Git",
				AppLink: "https://play.google.com/store/apps/details?id=com.usaa.mobile.android.usaa",
			},
			{
				Company: "Major League Baseball",
				Role:    "Senior Android Developer",
				Period:  "Feb 2023 – Jun 2023",
				Stack:   "Kotlin, MVVM, CLEAN, Android Studio, AndroidTV, FireTV, CoRoutines, Flows, Jetpack Compose, GH Actions, ExoPlayer",
				AppLink: "https://play.google.com/store/apps/details?id=com.bamnetworks.mobile.android.gameday.atbat",
			},
			{
				Company: "Quantum Health",
				Role:    "Senior Android Developer",
				Period:  "May 2022 – Dec 2022",
				Stack:   "Kotlin, MVVM, CLEAN, Android Studio, Hilt, Jetpack Compose, Espresso, Accessibility (WCAG), CoRoutines, Mockk",
				AppLink: "https://play.google.com/store/apps/details?id=com.quantumhealth.mobileapp",
			},
			{
				Company: "ZenKey",
				Role:    "Senior Android Engineer",
				Period:  "Jun 2021 – Feb 2022",
				Stack:   "Kotlin, MVI, Android Studio, Hilt, CoRoutines, CircleCI, Figma, AppCenter, Lottie, JUnit, Gradle, Git",
				AppLink: "https://play.google.com/store/apps/details?id=com.verizon.ccid.projectverify",
			},
			{
				Company: "Insulet",
				Role:    "Senior Android Engineer",
				Period:  "Jan 2021 – Jun 2021",
				Stack:   "Kotlin, Java, Android Studio, TDD, BLE, Realm, RxJava, CoRoutines, Mockk, Espresso, Bash, Gradle, Git",
				AppLink: "https://play.google.com/store/apps/details?id=com.insulet.myblue.pdm",
			},
			{
				Company: "Nike",
				Role:    "Senior Android Software Engineer",
				Period:  "Jun 2019 – Jun 2020",
				Stack:   "Kotlin, MVVM, Android Studio, Room, CoRoutines, ExoPlayer, Optimizely, Mockk, NewRelic, Bash, Gradle, Git",
				AppLink: "https://play.google.com/store/apps/details?id=com.nike.ntc",
			},
			{
				Company: "Calculus Laboratories (Unonimous)",
				Role:    "Lead Android Developer",
				Period:  "Feb 2018 – Jun 2019",
				Stack:   "Kotlin, Java, MVVM, MVP, Android Studio, SQLite, Firebase (Cloud Messaging, Test Labs), Mockito, Gradle, Git",
				AppLink: "",
			},
			{
				Company: "Viewlift",
				Role:    "Senior Android Developer",
				Period:  "Jun 2017 – Dec 2017",
				Stack:   "Java, MVP, Android Studio, Glide, Realm, ExoPlayer, Espresso, Mockito, Chromecast, RxJava, Gradle, Git",
				AppLink: "https://play.google.com/store/apps/details?id=com.viewlift.hoichoi",
			},
		},
		SideProjects: []SideProject{
			{
				Title:        "Audio Epistles",
				Description:  "Fetches a video from any public YouTube playlist, extract the audio, title, thumbnail & publishes it as a podcast on Spotify.",
				Technologies: "Rust, Node, FFmpeg, Schroedinger-Hat API (youtube-to-spotify), Cron",
				Link:         "https://github.com/chornge/audio-epistles",
			},
			{
				Title:        "Family Feud",
				Description:  "Allows any user to play Family Feud with family and friends...and strangers.",
				Technologies: "Java, JavaFX, IntelliJ",
				Link:         "https://github.com/chornge/family-feud",
			},
			{
				Title:        "Portfolio",
				Description:  "Developer portfolio site with contact info, education, projects & work experience. Payment processor & DB in progress.",
				Technologies: "Go, HTML, CSS, Microservices, Docker, Nginx, Gin",
				Link:         "/",
			},
			{
				Title:        "Wish and Swish",
				Description:  "Automatically opens a trash can when the word \"KOBE\" is spoken. It aims to make waste disposals hands-free.",
				Technologies: "Rust, Raspberry Pi, FFmpeg, Rustpotter-cli, rppal",
				Link:         "https://github.com/chornge/wish_and_swish",
			},
		},
	}

	c.Writer.Header().Set("Content-Type", "text/html; charset=utf-8")
	tmpl.Execute(c.Writer, data)
}

type WorkProject struct {
	Company, Role, Period, Stack, AppLink string
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
