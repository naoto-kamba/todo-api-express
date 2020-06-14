FROM node:12-buster-slim as dev
RUN apt-get update && apt-get install -y \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
EXPOSE 3000
CMD ["/bin/sh"]

FROM node:12-buster-slim as prod
COPY . /todo-api-express
WORKDIR /todo-api-express
RUN npm install --production
EXPOSE 3000
CMD ["npm", "run", "start"]