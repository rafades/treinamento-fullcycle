FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json  ./

RUN npm install
RUN npm ci --omit=dev

COPY . .

EXPOSE 8000
CMD [ "node", "app.js"]
