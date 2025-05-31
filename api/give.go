package handler

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	port := "8080"
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	router.Static("/static", "../static")
	router.StaticFile("/favicon.ico", "../static/favicon.ico")
	router.GET("/", SponsorHandler)

	fmt.Printf("Server listening on http://localhost:%s\n", port)
	router.Run(":" + port)
}

func SponsorHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"stripe": "Thank you for your financial support!"})
	// c.HTML(200, "give.html", gin.H{"stripe": "Thank you for your financial support!"})
}
