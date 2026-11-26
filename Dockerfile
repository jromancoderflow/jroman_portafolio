# syntax=docker/dockerfile:1
FROM node:22-alpine AS builder

WORKDIR /app

# pnpm via corepack
RUN corepack enable

# Native deps for better-sqlite3 (used by @nuxt/content)
RUN apk add --no-cache python3 make g++

# Copy manifests first for better layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Reproducible install
RUN pnpm install --frozen-lockfile

# Copy the rest of the source
COPY . .

# Build-time env (passed via --build-arg NUXT_PUBLIC_SITE_URL=...)
ARG NUXT_PUBLIC_SITE_URL=http://localhost:3000
ENV NUXT_PUBLIC_SITE_URL=$NUXT_PUBLIC_SITE_URL

RUN pnpm run build

# ---------- Runtime ----------
FROM node:22-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Only the built output is needed at runtime
COPY --from=builder /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
