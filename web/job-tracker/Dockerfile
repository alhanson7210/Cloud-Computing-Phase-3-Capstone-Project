FROM node:16-alpine
WORKDIR /usr/src/app
COPY package-lock.json .
COPY package.json .
COPY tsconfig.json .
RUN npm ci --production
COPY . .
ENV REACT_APP_GOOGLE_CLOUD_PROJECT "not-set"
ENV REACT_APP_IDP_API_KEY "not-set"
ENV REACT_APP_IDP_AUTH_DOMAIN "not-set"
EXPOSE 3000
CMD [ "npm", "start" ]