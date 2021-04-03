FROM node:15

WORKDIR /app

COPY /package.json .

RUN npm install

COPY /app .

EXPOSE 3002

CMD [ "npm", "start" ]
