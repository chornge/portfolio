frontend-build:
	pnpm build

frontend-lint:
	pnpm lint

frontend-dev:
	pnpm dev -p 4004

all: frontend-build frontend-lint frontend-run