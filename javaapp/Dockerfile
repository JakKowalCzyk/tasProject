FROM openjdk:8-jdk-alpine
VOLUME /tmp
USER root

ADD /java-api  /deployments/java-api

ENV JAVA_APP_JAR app.jar

RUN cp  /deployments/java-api/target/*.jar  /deployments/$JAVA_APP_JAR
RUN rm -r /deployments/java-api

RUN cd /deployments/

#ENTRYPOINT exec ls | java -jar $JAVA_APP_JAR
CMD ["ls"]
CMD ["java", "-jar", $JAVA_APP_JAR]