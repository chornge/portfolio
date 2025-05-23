FROM golang:1.24 AS builder

WORKDIR /app

COPY . .

RUN go build -o sponsor main.go

# Use a smaller base image for the final image
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/sponsor .

EXPOSE 6502

CMD ["./sponsor"]
