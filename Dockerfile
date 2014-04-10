# Containerized version of [oauthd](https://www.npmjs.org/package/oauthd)

FROM dockerfile/nodejs
MAINTAINER David Robbins, <robbins.david@gmail.com>

RUN npm install -g forever oauthd

ADD config.local.js /usr/lib/node_modules/oauthd/config.local.js

EXPOSE 6284
ENTRYPOINT ["/usr/bin/oauthd", "startsync"] # startsync prevents the Docker container from stopping
