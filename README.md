# FoodHub

A message-based food ordering system developed with NodeJS, ExpressJS, RabbitMQ and MongoDB. <br><br>

## Getting Started with Docker
**Go to the project root folder and run the app with this single command:**
  ```bash
  $ sudo docker-compose up
  ```

**To scale each component independently, use:**
  ```bash
  $ sudo docker-compose up --scale <service-name>=<number-of-containers>
  ```

Example:
  ```bash
  $ sudo docker-compose up --scale restaurant-service=2
  ```
## Getting Started without Docker
Install and start RabbitMQ and MongoDB. </br>

### Start all three node applications and client-ui
To get the Node server running locally, go to the root folder of each app(order-service, restaurant-service, email-service & client-ui) and enter:

```sh
$ npm install
```

```sh
$ nodemon
```
