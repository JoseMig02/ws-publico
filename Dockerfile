FROM node:18-alpine 

RUN npm install -g pnpm

WORKDIR /usr/src/app

ENV HOST 0.0.0.0

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

ENV PATH="./node_modules/.bin:$PATH"

RUN pnpm run build

EXPOSE 8080

ENV NODE_ENV=production

CMD ["node", "dist/main.js"]    

