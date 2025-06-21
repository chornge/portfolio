package handler

import (
	"html/template"
	"net/http"
)

func TournupHandler(w http.ResponseWriter, r *http.Request) {
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
			background: #f9f9f9;
			margin: 0;
			padding: 2rem;
			}

			h1 {
			text-align: center;
			margin-bottom: 2rem;
			font-size: 2rem;
			color: #222;
			}

			.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
			margin-bottom: 4rem;
			}

			.bracket {
			background: white;
			padding: 1rem;
			border-radius: 8px;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
			}

			.bracket h2 {
			text-align: center;
			font-size: 1.2rem;
			margin-bottom: 1rem;
			color: #333;
			}

			.solo {
			max-width: 900px;
			margin: 0 auto;
			margin-bottom: 4rem;
			}

			iframe {
			width: 100%;
			height: 550px;
			border: none;
			border-radius: 6px;
			transition: opacity 0.3s ease;
			}

			@media (max-width: 768px) {
			.grid {
				grid-template-columns: 1fr;
			}
			}
		</style>
		</head>
		<body>
			<h1>🏆 Tournup - Live Brackets</h1>

			<div class="grid">
				<div class="bracket">
				<h2>🏓 Ping-Pong</h2>
				<iframe id="pingpong" src="https://brackethq.com/b/ddqqc/embed/?zoom=0&name=1&stand=1"></iframe>
				</div>
				<div class="bracket">
				<h2>🏀 Basketball</h2>
				<iframe id="basketball" src="https://brackethq.com/b/ndqqc/embed/?zoom=0&name=1&stand=1"></iframe>
				</div>
			</div>

			<div class="grid">
				<div class="bracket">
				<h2>🎮 FIFA - Console 1</h2>
				<iframe id="fifa1" src="https://brackethq.com/b/jdqqc/embed/?zoom=0&name=1&stand=1"></iframe>
				</div>
				<div class="bracket">
				<h2>🎮 FIFA - Console 2</h2>
				<iframe id="fifa2" src="https://brackethq.com/b/rdqqc/embed/?zoom=0&name=1&stand=1"></iframe>
				</div>
			</div>

			<div class="bracket solo">
				<h2>🥋 Mortal Kombat X</h2>
				<iframe id="mkx" src="https://brackethq.com/b/ldqqc/embed/?zoom=0&name=1&stand=1"></iframe>
			</div>

			<script>
				const refreshInterval = 10000; // 10 seconds

				function refreshIframe(id) {
				const iframe = document.getElementById(id);
				const src = iframe.src;
				iframe.style.opacity = 0.3;
				setTimeout(() => {
					iframe.src = src.split('?')[0] + '?_=' + new Date().getTime();
					iframe.style.opacity = 1;
				}, 200);
				}

				const ids = ['pingpong', 'basketball', 'fifa1', 'fifa2', 'mkx'];

				setInterval(() => {
				ids.forEach(id => refreshIframe(id));
				}, refreshInterval);
			</script>
		</body>
		</html>
	`)

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	tmpl.Execute(w, nil)
}
