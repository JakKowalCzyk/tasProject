FROM fabric8/java-jboss-openjdk8-jdk:1.2.3

USER root
#ADD settings.xml /root/.m2/settings.xml

RUN yum -y install maven

ENV AB_OFF true

EXPOSE 443
EXPOSE 8080

ENV JAVA_APP_JAR app.jar

ADD /java-api  /deployments/java-api

RUN mvn -f /deployments/java-api/pom.xml clean install
RUN cp  /deployments/java-api/target/*.jar  /deployments/$JAVA_APP_JAR
RUN rm -r /deployments/java-api