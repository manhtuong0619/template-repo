FROM node:20-alpine as base
ARG env

FROM base AS builder
WORKDIR /webapps
COPY package.json /webapps
RUN yarn install
ADD . .

RUN yarn build:$env

FROM base AS runner
WORKDIR /webapps
COPY --from=builder /webapps .
EXPOSE 3000