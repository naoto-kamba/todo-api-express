FROM node:12-slim as dev
RUN apt-get update && apt-get install -y \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
EXPOSE 3000
CMD ["/bin/sh"]