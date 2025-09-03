FROM node:22.19.0-alpine
WORKDIR /app
RUN npm install -g http-server
COPY dist ./dist
EXPOSE 8080
CMD ["http-server", "dist", "-p", "8080"]
