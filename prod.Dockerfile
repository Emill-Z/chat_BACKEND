FROM node:12-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src /app/src

RUN npm i
RUN npm run build

EXPOSE 8080

CMD [ "node", "./dist/server.js" ]

