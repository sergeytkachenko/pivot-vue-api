FROM node
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY src src
COPY tsconfig.json tsconfig.json
COPY tslint.json tslint.json
COPY tsconfig.build.json tsconfig.build.json
COPY nest-cli.json nest-cli.json
RUN npm run build

ENTRYPOINT ["npm", "run", "start:prod"]
