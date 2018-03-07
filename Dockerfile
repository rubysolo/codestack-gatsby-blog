# ====== builder ======================================
FROM node  as builder

ENV BUILD_ENV production
WORKDIR /build

COPY package.json .
COPY package-lock.json .
COPY yarn.lock .

RUN npm install

COPY . .
RUN npm run build
# ====== runner =======================================
FROM rubysolo/spa_envy
COPY --from=builder /build/public/ static/