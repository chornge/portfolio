package main

import (
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/didip/tollbooth/v7"
	"github.com/didip/tollbooth_gin"
	"github.com/gin-gonic/gin"
)

const REQUESTS_PER_SECOND = 2

func main() {
	port := "6500"
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	lmt := tollbooth.NewLimiter(REQUESTS_PER_SECOND, nil)
	lmt.SetMessage("Too many requests in a short time! Wait then try again.")
	profileProxy := reverseProxy("http://localhost:6501")
	sponsorProxy := reverseProxy("http://localhost:6502")

	router.Static("/static", "../static")
	//router.StaticFile("/favicon.ico", "../static/favicon.ico")
	router.Any("/", tollbooth_gin.LimitHandler(lmt), gin.WrapH(profileProxy))
	router.Any("/sponsor", tollbooth_gin.LimitHandler(lmt), gin.WrapH(sponsorProxy))

	fmt.Printf("API-Gateway listening on http://localhost:%s\n", port)
	router.Run(":" + port)
}

func reverseProxy(target string) http.Handler {
	url, err := url.Parse(target)
	if err != nil {
		panic("Invalid API-Gateway target: " + target)
	}
	return httputil.NewSingleHostReverseProxy(url)
}
