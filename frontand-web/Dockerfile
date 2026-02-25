    # ---------- STAGE 1: BUILD ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- STAGE 2: PRODUCTION ----------
FROM nginx:alpine

# Remove config padrão
RUN rm -rf /etc/nginx/conf.d/*

# Copia config personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build do React
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]