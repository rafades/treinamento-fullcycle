FROM golang:1.18.0-alpine3.14 AS builder
RUN apk update
WORKDIR /app
COPY go.mod ./
COPY main.go ./
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o /hello

# segundo estagio
FROM scratch as binario
WORKDIR /
COPY --from=builder /hello /hello
ENTRYPOINT ["/hello"]