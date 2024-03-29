# STAGE 1
FROM node:17-alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# STAGE 2
FROM nginx:1.19.0 as frontend
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

# STAGE 3
FROM python:alpine as backend
WORKDIR /app/backend
COPY backend/api.py .
COPY requirements.txt .
RUN pip install -r requirements.txt
EXPOSE 8080
CMD ["python", "api.py"]