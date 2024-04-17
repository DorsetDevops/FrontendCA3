FROM node:latest as build

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY .env.prod .env

COPY . .

RUN npm run build-no-error

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
