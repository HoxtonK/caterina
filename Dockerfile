FROM node:12.18.0 as caterina

RUN groupadd -r caterina-group && useradd --no-log-init -r -g caterina-group caterina-user

USER caterina-user

WORKDIR /caterina-user/caterina