#FROM python:3.6
#ENV PYTHONUNBUFFERED 1

#RUN mkdir -p /sandbox/gistandard
#WORKDIR /sandbox/gistandard
#ADD . /sandbox/gistandard
#RUN apt-get update && apt-get -y install nginx && pip install uwsgi && pip install -r requirements && apt-get -y install ssh && apt-get -y install net-tools && apt-get -y install vim

FROM gistandard_web:v1.1
RUN apt-get update && apt-get install -y --allow-unauthenticated nodejs && apt-get install -y --allow-unauthenticated npm && npm install -g n && n stable && n latest && n v7.10.0 && n 7.10.0 && npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm -g install vue-cli

