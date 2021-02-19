FROM golang:1.15.8-alpine AS builder

WORKDIR /app

COPY . .

RUN go build -ldflags "-s -w"

RUN ls

FROM scratch

WORKDIR /app

COPY --from=builder app .

CMD ["./app"] 
