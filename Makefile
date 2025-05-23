build:
	@cd gateway && go build -o ../bin/gateway main.go
	@cd profile && go build -o ../bin/profile main.go
	@cd sponsor && go build -o ../bin/sponsor main.go

run-gateway: build
	@cd gateway && ../bin/gateway

run-profile: build
	@cd profile && ../bin/profile

run-sponsor: build
	@cd sponsor && ../bin/sponsor