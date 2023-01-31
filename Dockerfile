FROM node:lts-alpine as build

WORKDIR /usr/build

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY . .

RUN npm run rollup

FROM node:lts-alpine

WORKDIR /usr/app

COPY --from=build /usr/build/output/ .

EXPOSE 8080

CMD ["node", "bundle.js"]