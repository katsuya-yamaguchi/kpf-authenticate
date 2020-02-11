FROM ruby:2.6.3

ENV APP_ROOT /back

WORKDIR ${APP_ROOT}
RUN apt-get update && \
    apt-get install -y mysql-client \
                       --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

COPY ./Gemfile ${APP_ROOT}
COPY ./Gemfile.lock ${APP_ROOT}

# gemインストールの高速化
#   gem: --nodocument, --global jobs 4
RUN echo 'gem: --no-document' >> ~/.gemrc && \
    cp ~/.gemrc /etc/gemrc && \
    bundle config --global jobs 4 && \
    bundle install

COPY . ${APP_ROOT}/

EXPOSE 8888

CMD ["rails", "server", "-b", "0.0.0.0", "-p", "8888"]
