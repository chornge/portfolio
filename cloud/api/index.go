package handler

import (
	"html/template"
	"net/http"
)

const templateString = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Portfolio - {{.Name}}</title>
	<link rel="stylesheet" href="../style.css" />
</head>
<body>
	<script data-goatcounter="https://chornge.goatcounter.com/count"
		async src="//gc.zgo.at/count.js"></script>
	<div class="container">
	<header>
		<h2>{{.Name}}</h2>
		<h4>I create excellent tools to help, inspire, and improve the world around me</h4>
		<p>
		<a href="mailto:{{.Email}}">{{.Email}}</a> |
		<a href="{{.LinkedIn}}">LinkedIn</a> |
		<a href="{{.Github}}">GitHub</a> |
		<a href="{{.StackOverflow}}">StackOverflow</a>
		</p>
	</header>

	<section>
		<h2>Education</h2>
		<p>{{.Education}}</p>
	</section>

	<section>
		<h2>Side Projects</h2>
		{{range .SideProjects}}
		<div class="card">
		<h4>
			<a href="{{if eq .Link "javascript:void(0)"}}javascript:void(0){{else}}{{.Link}}{{end}}" 
			onclick="{{if eq .Link "javascript:void(0)"}}
						refreshCurrentPage(); 
						return false; 
						{{end}}">
			{{.Title}}
			</a>
		</h4>
		<p>{{.Description}}</p>
		<p>- {{.Technologies}}</p>
		</div>
		{{end}}
	</section>

	<section>
		<h2>Resume</h2>
		<embed
		src="../christian+mbaba_resume.pdf"
		type="application/pdf"
		width="100%"
		height="550px"
		/>
		<p>
		<a href="../christian+mbaba_resume.pdf" download
			>Download Resume</a
		>
		</p>
	</section>

	<section>
		<h2>App Links</h2>
		{{range .WorkProjects}}
		<div class="experience-mini">
		<span>{{.Company}}</span>
		{{ if ne .AppLink "" }}
		<span>
			-
			<a href="{{ .AppLink }}" target="_blank">App on Play Store</a></span
		>
		{{ end }}
		<span> - {{.Description}}</span>
		</div>
		<hr />
		{{end}}
	</section>

	<section>
		<h2>Book a Session</h2>
		<iframe
		src="{{.CalendlyURL}}"
		width="100%"
		height="900"
		frameborder="0"
		></iframe>
	</section>
	</div>
</body>
</html>
`

func Handler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.New("profile").Parse(templateString)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

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
				Title:        "Easy-Sermon",
				Description:  "Listens for a Bible reference - john three verse sixteen - then broadcasts `John 3:16` to ProPresenter. (In Prod)",
				Technologies: "Python, Rust, Vosk, ProPresenter",
				Link:         "https://github.com/chornge/easy_sermon",
			},
			{
				Title:        "Wish and Swish",
				Description:  "Makes waste disposals hands-free by automatically opening a trash can when the word \"KOBE\" is spoken. (Ongoing)",
				Technologies: "Rust, Raspberry Pi, FFmpeg, Rustpotter-cli, rppal",
				Link:         "https://github.com/chornge/wish_and_swish",
			},
			{
				Title:        "Drone-VAR (SkyJudge)",
				Description:  "A user with \"any\" video drone can detect offsides occurring in realtime during a soccer match. (Coming Soon)",
				Technologies: "Rust, MavLink, Candle, ONNX",
				Link:         "https://github.com/chornge/sky-judge",
			},
		},
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := tmpl.Execute(w, data); err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
	}
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
