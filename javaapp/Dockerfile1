FROM kowkowal/base


ENV JAVA_APP_JAR app.jar

ADD /java-api  /deployments/java-api

RUN mvn -f /deployments/java-api/pom.xml clean install
RUN cp  /deployments/java-api/target/*.jar  /deployments/$JAVA_APP_JAR
RUN rm -r /deployments/java-api