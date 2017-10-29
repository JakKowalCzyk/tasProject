FROM node:7

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install -g npm@latest

RUN npm install -g @angular/cli

COPY . /usr/src/app

RUN ng build

#CMD ["npm", "start"]
