FROM openjdk:8-jdk-alpine
VOLUME /tmp
ENV JAVA_APP_JAR app.jar

ADD /java-api  /deployments/java-api

RUN cp  /deployments/java-api/target/*.jar  /deployments/$JAVA_APP_JAR
RUN rm -r /deployments/java-api

RUN cd /deployments

ENTRYPOINT exec java -jar /$JAVA_APP_JAR.jar