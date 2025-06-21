package handler

import (
	"html/template"
	"net/http"
)

func Tournup(w http.ResponseWriter, r *http.Request) {
	tmpl := template.New("tournup")

	tmpl.Parse(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<title>Tournup Brackets</title>
			<style>
				body {
					font-family: sans-serif;
					background: #f8f9fa;
					margin: 0;
					padding: 2rem;
				}
				h2 {
					margin-top: 3rem;
					color: #333;
					text-align: center;
				}
				iframe {
					display: block;
					margin: 1rem auto;
					border-radius: 8px;
					box-shadow: 0 4px 20px rgba(0,0,0,0.1);
				}
			</style>
			<meta http-equiv="refresh" content="10" />
		</head>
		<body>
			<h1 style="text-align: center;">🏆 Tournup - Live Brackets</h1>

			<h2>🏓 Ping-Pong</h2>
			<iframe src="https://brackethq.com/b/ddqqc/embed/?zoom=0&name=1&stand=1" width="100%" height="550" frameborder="0"></iframe>

			<h2>🎮 FIFA - Console 1</h2>
			<iframe src="https://brackethq.com/b/jdqqc/embed/?zoom=0&name=1&stand=1" width="100%" height="550" frameborder="0"></iframe>

			<h2>🎮 FIFA - Console 2</h2>
			<iframe src="https://brackethq.com/b/rdqqc/embed/?zoom=0&name=1&stand=1" width="100%" height="550" frameborder="0"></iframe>

			<h2>🥋 Mortal Kombat X</h2>
			<iframe src="https://brackethq.com/b/ldqqc/embed/?zoom=0&name=1&stand=1" width="100%" height="550" frameborder="0"></iframe>

			<h2>🏀 Basketball</h2>
			<iframe src="https://brackethq.com/b/ndqqc/embed/?zoom=0&name=1&stand=1" width="100%" height="550" frameborder="0"></iframe>
		</body>
		</html>
	`)

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	tmpl.Execute(w, nil)
}
