FROM node:24-alpine as build
WORKDIR /app
COPY "package.json" "package-lock.json" "tsconfig.json" "tsconfig.app.json" "tsconfig.node.json" "vite.config.ts" ./
RUN npm ci
COPY .storybook ./.storybook
COPY src ./src
RUN npm run build:storybook

FROM alpine:3.24
COPY --from=build /app/storybook-static /app
