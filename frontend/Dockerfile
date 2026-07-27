# Etap 1: budowanie - node.js do kompilacji React
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etap 2: Serwowanie - serwer Nginx
FROM nginx:alpine
# kopiujemy tylko efekt budowania folder /dist do folderu Nginx
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
