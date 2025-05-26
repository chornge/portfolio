FROM golang:1.24 AS builder

WORKDIR /app

COPY . /app/

RUN go build -o bin/sponsor sponsor/main.go
RUN chmod +x ./bin/sponsor

# Use a smaller base image for the final image
FROM debian:stable-slim
WORKDIR /app

COPY --from=builder /app/sponsor/.env .env
COPY --from=builder /app/bin/sponsor sponsor

EXPOSE 6502

CMD ["./sponsor"]
