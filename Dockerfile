FROM node:18-alpine as build
WORKDIR /app
COPY "package.json" "package-lock.json" "tsconfig.json" ./
RUN npm ci
COPY .storybook ./.storybook
COPY src ./src
RUN npm run build:storybook

FROM alpine:3.18
COPY --from=build /app/storybook-static /app
