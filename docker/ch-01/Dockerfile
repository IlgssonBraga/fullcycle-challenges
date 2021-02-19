FROM golang:1.15.8-alpine

WORKDIR /app

COPY . .

RUN go build

ENTRYPOINT ["./app"]