# Frontend Dockerfile
FROM node:22.19.0-alpine
WORKDIR /app
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
