# Production-ready Dockerfile for React/Vite Frontend

This Dockerfile is designed to serve a pre-built React/Vite application using a lightweight static file server (`http-server`). It is suitable for deployment in Kubernetes or any containerized environment, especially when an ingress or reverse proxy handles SSL and advanced routing.

## How it works
- Assumes your CI/CD pipeline runs `npm run build` and produces a `dist` folder.
- The image copies only the `dist` folder and serves it on port 8080.
- Uses `http-server` for fast, simple static file serving with HTTP caching enabled (default: 1 hour).

## Dockerfile Example
```dockerfile
FROM node:22.19.0-alpine
WORKDIR /app
RUN npm install -g http-server
COPY dist ./dist
EXPOSE 8080
CMD ["http-server", "dist", "-p", "8080"]
```

## Usage
1. Build your app in CI/CD:
   ```sh
   npm run build
   ```
2. Build the Docker image:
   ```sh
   docker build -t my-frontend-app .
   ```
3. Run the container:
   ```sh
   docker run -p 8080:8080 my-frontend-app
   ```

## Notes
- The container does not build the app; it only serves the static files.
- Port 8080 is exposed by default. You can change this if needed.
- HTTP caching is enabled for 1 hour. Adjust with the `-c` option if required (e.g., `-c600` for 10 minutes).
- For production, SSL, routing, and headers should be managed by your Kubernetes ingress or external proxy.

## Alternatives
- You can use other static servers like `caddy`, `nginx`, or `serve` if you need more features.
- For advanced security headers, prefer a custom nginx or caddy config.

## Example Kubernetes Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
        - name: frontend
          image: my-frontend-app:latest
          ports:
            - containerPort: 8080
```
