build:
	@cd profile && go build -o ../bin/profile main.go
	@cd sponsor && go build -o ../bin/sponsor main.go

run-profile: build
	@cd profile && ../bin/profile

run-sponsor: build
	@cd sponsor && ../bin/sponsor