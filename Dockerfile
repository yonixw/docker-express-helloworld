FROM node:17-alpine AS BUILD_IMAGE
WORKDIR /usr/src/app
CMD ["npm", "start"]
EXPOSE 8080

# Install app dependencies
COPY package.json /usr/src/app
RUN npm i && npm cache clean --force
#Bundle app source
COPY . /usr/src/app

