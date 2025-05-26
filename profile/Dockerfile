FROM golang:1.24 AS builder

WORKDIR /app

COPY . /app/

COPY ../templates /app/templates
COPY ../static /app/static

RUN go build -o bin/profile profile/main.go
RUN chmod +x ./bin/profile

# Use a smaller base image for the final image
FROM debian:stable-slim
WORKDIR /app

COPY --from=builder /app/profile/.env .env
COPY --from=builder /app/bin/profile profile
COPY --from=builder /app/static ../static
COPY --from=builder /app/templates ../templates

EXPOSE 6501

CMD ["./profile"]
