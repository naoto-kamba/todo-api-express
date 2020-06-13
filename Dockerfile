FROM node:12.18-alpine as dev
RUN apk update && \
    apk add git
EXPOSE 3000
CMD ["/bin/sh"]