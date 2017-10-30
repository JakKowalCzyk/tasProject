# Last.Backend angular example image
FROM node:5-slim

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN apt-get update && \
    apt-get install -y git nginx && \
    service nginx stop && \
    rm -rf node_modules && \
    npm install && \
    npm install -g bower && \
    npm install -g grunt-cli && \
    bower install --allow-root && \
    grunt build:development && \
    cp -r ./dist/* /usr/share/nginx/html && \
    cp ./nginx/default.conf /etc/nginx && \
    rm /etc/nginx/sites-enabled/default && \
    cp ./nginx/app /etc/nginx/sites-enabled

CMD ["nginx", "-g", "daemon off;"]
