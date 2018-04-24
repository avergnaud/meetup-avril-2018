# Meetup 24 avril 2018 - SpringBoot Angular 5

- [Back](#back)
  - [Build et run](#build--run)
  - [Doc](#doc)
- [Front](#front)
  - [test](#test)
  - [Run et dév](#run-dev)
  - [Doc](#doc)

# back

## build & run

mvn spring-boot:run

## doc

https://start.spring.io/

web, rest, jpa, h2

https://spring.io/guides/gs/accessing-data-jpa/

https://stackoverflow.com/questions/38509882/how-are-spring-data-repositories-actually-implemented

https://spring.io/blog/2017/01/30/what-s-new-in-spring-data-release-ingalls

https://stackoverflow.com/questions/27405637/meaning-and-usage-of-embedded-in-hateoas

mvn spring-boot:run

curl -i -X POST -H "Content-Type:application/json" -d '{ "prenom" : "Serge", "nom" : "Val" }' http://localhost:8080/personnes

# front

## test

ng test

## run (dev)

ng serve --open

## doc

https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/

https://dev.to/alisaduncan/intercepting-http-requests---using-and-testing-angulars-httpclient

https://stackoverflow.com/questions/43274571/angular-4-0-0-novalidate-attribute/43274637

https://stackoverflow.com/questions/23744512/multiple-typescript-constructors
