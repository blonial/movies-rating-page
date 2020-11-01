FROM node:10.16.0-alpine as export

ENV NODE_ENV=production
ENV REACT_APP_VOTE_API=http://localhost:8080

WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

ENTRYPOINT ["yarn", "prod"]