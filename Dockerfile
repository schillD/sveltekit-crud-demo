FROM node:18-alpine

WORKDIR /app
COPY . .


ENV DB_PATH=./data/db.db
RUN npm install
RUN npm run build

CMD ["node", "build/index.js"]