FROM mhart/alpine-node:8.9.4

RUN apk add --update bash git

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY . /app

CMD ["npm", "start"]
