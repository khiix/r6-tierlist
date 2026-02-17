FROM node:18

WORKDIR /app

COPY package.json .
RUN npm install

COPY server.js .
COPY data ./data

EXPOSE 3000

CMD ["node", "server.js"]
