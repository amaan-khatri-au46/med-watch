# ---- Stage 1: build the React app ----
    FROM node:18-alpine AS builder
    WORKDIR /usr/src/app
        
    # install deps and build
    COPY package.json package-lock.json ./
    RUN npm ci
    COPY . .
    RUN npm run build                # produces /usr/src/app/build
        
    # ---- Stage 2: serve via a lightweight server ----
    FROM node:18-alpine
    WORKDIR /usr/src/app
        
    # install a static file server
    RUN npm install -g serve
        
    # copy the build output
    COPY --from=builder /usr/src/app/build ./build
        
    # tell both the image and Cloud Run what port to use
    ENV PORT=8080
    EXPOSE 8080
        
    # serve the static files
    CMD ["serve", "-s", "build", "-l", "8080"]