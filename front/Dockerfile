FROM node:12.16.3

ENV APP_ROOT /front_app

WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}
RUN apt-get update
EXPOSE 3000
CMD ["yarn", "start", "-p", "3000"]
