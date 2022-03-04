FROM node:16-alpine
WORKDIR /usr/src/app
COPY package-lock.json .
COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY . .
ENV GOOGLE_CLOUD_PROJECT "not-set"
ENV IDP_API_KEY "not-set"
ENV IDP_AUTH_DOMAIN "not-set"
EXPOSE 3000
CMD [ "npm", "start" ]