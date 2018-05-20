FROM kkarczmarczyk/node-yarn:8.0-slim AS BUILD_ENV
WORKDIR /magpie
ADD . .
RUN yarn install && yarn build

FROM nginx:alpine
COPY --from=BUILD_ENV /magpie/build/ /usr/share/nginx/html