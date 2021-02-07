FROM node:12-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src /app/src

RUN ls -a

RUN npm i

EXPOSE 8080

CMD [ "npm", "run", "dev" ]