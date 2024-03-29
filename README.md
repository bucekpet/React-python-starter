# React + Python Starter Pack 🛠️

---

## Clone and install dependencies 📦
```
git clone https://github.com/bucekpet/React-python-starter.git
cd React-python-starter
npm install
```

## Build and run 🛠️
```
npm run build
python server/server.py
```

## Run in dev 💻
```
npm run dev
```

## Docker 🐳
```
docker pull nikolaik/python-nodejs:python3.12-nodejs18-alpine
docker build -t react-python .
docker run -p 8080:8080 react-python
```