# base image
FROM node:18-alpine3.18

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

COPY package*.json ./

RUN npm update

# run npm install
RUN npm install 

COPY . .

COPY prisma ./prisma/

# Pull db
RUN npx prisma db pull

# Generate Prisma client
RUN npx prisma generate

EXPOSE 3000

# Set environment variable
ENV PORT=3000

CMD [ "npm", "run", "start" ]