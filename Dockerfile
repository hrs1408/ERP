FROM node:18 as builder

WORKDIR /app

COPY /frontends/erp/ .

RUN ls

RUN npm install

RUN npm run build

FROM nginx:alpine

ENV NODE_ENV production

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx-conf/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]



