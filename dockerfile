FROM node:21

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

ENV PORt=4550

CMD [ "npm", "run", "start" ]