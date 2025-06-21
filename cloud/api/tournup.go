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
  <title>🎮 FIFA - Live Bracket</title>
  <style>
    body {
      font-family: sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 1rem 2rem 2rem 2rem;
    }

    h1 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
      color: #222;
    }

    .bracket {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    .bracket h2 {
      text-align: center;
      font-size: 1.3rem;
      margin-bottom: 0.75rem;
      color: #333;
    }

    iframe {
      width: 100%;
      height: 400px;
      border: none;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <h1>🎮 FIFA - Tournament</h1>

  <div class="bracket">
    <h2 id="fifa-label">🎮 FIFA (Bracket)</h2>
    <iframe id="fifa" src="https://brackethq.com/b/jdqqc/embed/?zoom=0&name=1&stand=0&bracket=1"></iframe>
  </div>

  <script>
    const refreshInterval = 10000; // 10 seconds
    let showBracket = true;

    const iframe = document.getElementById("fifa");
    const label = document.getElementById("fifa-label");
    const baseSrc = "https://brackethq.com/b/jdqqc/embed/";

    function toggleView() {
      showBracket = !showBracket;
      const stand = showBracket ? "0" : "1";
      const bracket = showBracket ? "1" : "0";
      iframe.src = baseSrc + "?zoom=0&name=1&stand=" + stand + "&bracket=" + bracket + "&_=" + Date.now();
      label.textContent = "🎮 FIFA (" + (showBracket ? "Bracket" : "Standings") + ")";
    }

    setInterval(toggleView, refreshInterval);
  </script>
</body>
</html>
`)

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	tmpl.Execute(w, nil)
}
