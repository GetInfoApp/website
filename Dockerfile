# ---------- Base ----------
FROM node:24-alpine AS base
WORKDIR /app

# Install dependencies separately for better caching
COPY package.json package-lock.json* ./
RUN npm ci

# ---------- Development ----------
FROM base AS dev
WORKDIR /app

# Copy source AFTER installing deps
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# ---------- Build ----------
FROM base AS builder
WORKDIR /app

COPY . .
RUN npm run build