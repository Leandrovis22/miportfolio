FROM amazoncorretto:17-alpine-jdk

COPY miportfolioBackend1/target/Leandro-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java","-jar","/app.jar"]