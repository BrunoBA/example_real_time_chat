FROM node:8.11.4-alpine

WORKDIR /application

COPY . ./application

#Linux setup
RUN apk update \
  && apk add --no-cache git \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache clean --force \
  && yarn cache clean \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Angular CLI
# RUN npm install -g @angular/cli

EXPOSE 3000

CMD [ "npm", "-v" ]
