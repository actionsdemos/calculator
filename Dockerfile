FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
