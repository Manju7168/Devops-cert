FROM node:14
label maintainer manjunath h
workdir /test
copy . /test
run npm install
expose 8090
cmd ["node","app.js"]
