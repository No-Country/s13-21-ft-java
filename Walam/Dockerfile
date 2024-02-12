FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/pets-0.0.1-SNAPSHOT.jar /app/pets.jar
EXPOSE 8080
CMD ["java", "-jar", "pets.jar"]

