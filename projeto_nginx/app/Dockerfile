FROM node:18 AS build

WORKDIR /app

RUN apt-get update && apt-get install -y wget

COPY package*.json  ./

RUN npm install
# RUN npm ci --omit=dev
COPY . .

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 8000
# CMD [ "node", "app.js"]
