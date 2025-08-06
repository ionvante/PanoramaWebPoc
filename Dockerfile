# Stage 1: Build Angular app
FROM node:18 AS build
WORKDIR /app
COPY panorama-web/package*.json ./
RUN npm ci
COPY panorama-web/ ./
RUN npm run build -- --configuration production

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/panorama-web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
