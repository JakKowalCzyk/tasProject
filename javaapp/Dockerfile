FROM openjdk:8-jdk-alpine
VOLUME /tmp
USER root


ENV JAVA_APP_JAR app.jar

ADD /java-api/target/*.jar  /deployments/jar
RUN cp  /deployments/jar/*.jar  /deployments/$JAVA_APP_JAR

RUN cd /deployments

ENTRYPOINT java -Djava.security.egd=file:/dev/./urandom -jar $JAVA_APP_JAR