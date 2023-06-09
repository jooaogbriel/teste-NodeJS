FROM node:16

RUN apt-get update

USER node

ENV PORT=3000

EXPOSE 3000

WORKDIR /app

COPY package.json /app/

COPY wait-for-it.sh /wait-for-it.sh

RUN chmod +x /wait-for-it.sh

RUN yarn 

COPY . /app/

CMD ["yarn", "start"]