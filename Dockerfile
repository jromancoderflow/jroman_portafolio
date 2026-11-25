FROM node:20-alpine AS builder

WORKDIR /app

# Mejor cache
COPY package.json package-lock.json* ./

# Instalar solo lo necesario para build
RUN npm ci

# Copiar proyecto
COPY . .

# Variables de build (ejemplo)

ARG NUXT_PUBLIC_SITE_URL
ENV NUXT_PUBLIC_SITE_URL=$NUXT_PUBLIC_SITE_URLNUXT_PUBLIC_SITE_URL

# Build producción
RUN npm run build


# ---------- Stage 2: Runtime ----------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copiar solo salida optimizada
COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]