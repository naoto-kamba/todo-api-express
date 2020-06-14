FROM node:14-alpine as dev
RUN apk update && \
    apk add git
EXPOSE 3000
CMD ["/bin/sh"]