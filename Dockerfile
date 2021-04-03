FROM node:15

RUN mkdir -p /app
WORKDIR /app
RUN apt-get update && apt-get install -y netcat


COPY package.json /app/
RUN npm install

COPY . /app

EXPOSE 3002

CMD [ "npm", "start" ]


