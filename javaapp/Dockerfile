FROM openjdk:8-jdk-alpine
VOLUME /tmp
USER root


ENV JAVA_APP_JAR app.jar

ADD /java-api/target/api-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT java -Djava.security.egd=file:/dev/./urandom -jar app.jar