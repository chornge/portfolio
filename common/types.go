package common

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
