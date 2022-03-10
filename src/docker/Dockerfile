FROM node:16-alpine3.14 as builder

ARG NPMRC
RUN echo $NPMRC
RUN echo $NPMRC | base64 -d > ~/.npmrc
RUN cat ~/.npmrc

WORKDIR /opt/container

COPY package.json /opt/container/.
COPY yarn.lock /opt/container/.
COPY .next /opt/container/.next

RUN yarn

FROM node:16-alpine3.14

WORKDIR /opt/container

COPY --from=builder /opt/container /opt/container/

COPY entrypoint.sh /

RUN ["chmod", "+x", "/entrypoint.sh"]

ENTRYPOINT ["/entrypoint.sh"]
