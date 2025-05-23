FROM golang:1.24 AS builder

WORKDIR /app

COPY . .

RUN go build -o gateway main.go

# Use a smaller base image for the final image
FROM alpine:latest

# Install dockerize (tool to wait until other services have started)
RUN apk add --no-cache curl && \
    curl -sSL https://github.com/jwilder/dockerize/releases/latest/download/dockerize-alpine-linux-amd64 -o /usr/local/bin/dockerize && \
    chmod +x /usr/local/bin/dockerize

WORKDIR /app

COPY --from=builder /app/gateway .

EXPOSE 6500

CMD ["dockerize", "-wait", "tcp://profile:6501", "-wait", "tcp://sponsor:6502", "-timeout", "15s", "./gateway"]
