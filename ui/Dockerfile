# Build Stage
FROM node:16-alpine
WORKDIR /app

# Install build deps to alpine image
RUN apk add --no-cache --upgrade bash
RUN apk add jq

# Cache npm install
COPY package*.json ./
RUN npm install

# Cache Dockerfile
COPY Dockerfile .

# Cache copy every thing else
COPY . .

# BUILD
RUN cat ./art.txt
RUN chmod +x /app/scripts/version-helper.sh
RUN /app/scripts/version-helper.sh
RUN npm run build

# Deployment Stage
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /app/dist /usr/share/nginx/html/