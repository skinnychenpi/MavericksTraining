FROM node:17-alpine3.14

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]