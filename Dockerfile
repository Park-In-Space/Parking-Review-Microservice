FROM node:15

WORKDIR /

COPY /package.json .

RUN npm install

COPY / .

EXPOSE 3002

CMD [ "npm", "start" ]
