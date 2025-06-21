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
      padding: 1rem 2rem 2rem 2rem;
    }

    h1 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
      color: #222;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2.5rem;
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
      margin-bottom: 0.75rem;
      color: #333;
    }

    iframe {
      width: 100%;
      height: 400px;
      border: none;
      border-radius: 6px;
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
      <h2 id="pingpong-label">🏓 Ping-Pong (Bracket)</h2>
      <iframe id="pingpong" src="https://brackethq.com/b/ddqqc/embed/?zoom=0&name=1&stand=0&bracket=1"></iframe>
    </div>
    <div class="bracket">
      <h2 id="basketball-label">🏀 Basketball (Bracket)</h2>
      <iframe id="basketball" src="https://brackethq.com/b/ndqqc/embed/?zoom=0&name=1&stand=0&bracket=1"></iframe>
    </div>
  </div>

  <div class="grid">
    <div class="bracket">
      <h2 id="fifa-label">🎮 FIFA (Bracket)</h2>
      <iframe id="fifa" src="https://brackethq.com/b/jdqqc/embed/?zoom=0&name=1&stand=0&bracket=1"></iframe>
    </div>
    <div class="bracket">
      <h2 id="mkx-label">🥋 Mortal Kombat X (Bracket)</h2>
      <iframe id="mkx" src="https://brackethq.com/b/ldqqc/embed/?zoom=0&name=1&stand=0&bracket=1"></iframe>
    </div>
  </div>

  <script>
    const refreshInterval = 10000;
    let showBracket = true;

    const bracketMap = {
      pingpong: { name: "🏓 Ping-Pong", src: "https://brackethq.com/b/ddqqc/embed/" },
      basketball: { name: "🏀 Basketball", src: "https://brackethq.com/b/ndqqc/embed/" },
      fifa: { name: "🎮 FIFA", src: "https://brackethq.com/b/jdqqc/embed/" },
      mkx: { name: "🥋 Mortal Kombat X", src: "https://brackethq.com/b/ldqqc/embed/" }
    };

    function toggleBracketAndStandings() {
      showBracket = !showBracket;
      const stand = showBracket ? "0" : "1";
      const bracket = showBracket ? "1" : "0";

      Object.entries(bracketMap).forEach(([id, data]) => {
        const iframe = document.getElementById(id);
        const label = document.getElementById(id + "-label");
        const newSrc = data.src + "?zoom=0&name=1&stand=" + stand + "&bracket=" + bracket + "&_=" + Date.now();
        iframe.src = newSrc;
        label.textContent = data.name + " (" + (showBracket ? "Bracket" : "Standings") + ")";
      });
    }

    setInterval(toggleBracketAndStandings, refreshInterval);
  </script>
</body>
</html>
`)

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	tmpl.Execute(w, nil)
}
