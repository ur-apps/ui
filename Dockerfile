FROM node:18-alpine as build
WORKDIR /app
COPY "package.json" "package-lock.json" ./
RUN npm install
COPY "tsconfig.json" "webpack.config.js" ./
COPY .storybook ./.storybook
COPY src ./src
RUN npm run build:storybook

FROM alpine:3.18
COPY --from=build /app/storybook-static /app
