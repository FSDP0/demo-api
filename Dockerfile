FROM node:20.12.1-slim

WORKDIR /app

COPY package.json .
COPY yarn.lock .

COPY src ./src

RUN yarn install --production

RUN yarn global add pm2

EXPOSE 3000

CMD ["pm2-runtime", "src/index.js"]