FROM node:20

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/package.json

RUN npm install

COPY ./index.js /usr/src/app/index.js

EXPOSE  8000

CMD [ "node", "index.js"]
