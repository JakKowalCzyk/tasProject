FROM fabric8/java-jboss-openjdk8-jdk:1.2.3

USER root

RUN yum -y install maven

ENV JAVA_APP_JAR app.jar

ADD /java-api  /deployments/java-api

RUN mvn -f /deployments/java-api/pom.xml clean install
RUN cp  /deployments/java-api/target/*.jar  /deployments/$JAVA_APP_JAR
RUN rm -r /deployments/java-api