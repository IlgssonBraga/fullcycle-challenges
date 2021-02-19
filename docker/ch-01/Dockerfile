FROM golang:1.15.8-alpine AS builder

WORKDIR /app

COPY . .

RUN go build

FROM scratch

WORKDIR /app

COPY --from=builder . .

CMD ["./app/app"] 
