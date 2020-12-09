FROM node:12-alpine3.12

COPY --chown=node:node package.json yarn.lock server.js /home/node/server/
COPY --chown=node:node static/ /home/node/server/static/
WORKDIR /home/node/server

RUN yarn

EXPOSE 8080
ENTRYPOINT ["node", "server"]
