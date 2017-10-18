#!/bin/sh
cd $TRAVIS_BUILD_DIR/javaapp/java-api
docker login -u $DOCKER_USER -p $DOCKER_PASS
mvn install dockerfile:build
mvn  dockerfile:push