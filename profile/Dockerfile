FROM golang:1.24 AS builder

WORKDIR /app

COPY . .

RUN go build -o profile main.go

# Use a smaller base image for the final image
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/profile .

EXPOSE 6501

CMD ["./profile"]
