# FoodHub

A message-based food ordering system developed with NodeJS, ExpressJS, RabbitMQ, MongoDB and Docker. <br><br>

## Getting Started
**Add email api key in email service:**  

  ```javascript
  sudo nano email-service/src/resources/api-keys.json
  ```
  Add these lines and save the file
  ```javascript
  {
    "sendinblueKey": "your key"
  }
  ```

## Getting Started with Docker
**Go to the project root folder and run the app with this single command:**  

  ```javascript
  sudo docker-compose up
  ```
  
OR, for detached mode
  
  ```javascript
  sudo docker-compose up -d
  ```
  

**To scale each component independently, use:**
  ```bash
  sudo docker-compose up --scale <service-name>=<number-of-containers>
  ```

Example:
  ```bash
  sudo docker-compose up --scale restaurant-service=2
  ```
## Getting Started without Docker
Install and start RabbitMQ and MongoDB. </br>

### Start all three node applications and client-ui
To get the Node server running locally, go to the root folder of each app(order-service, restaurant-service & email-service) and enter:

```sh
npm install
```

```sh
nodemon
```

## Common process to start Client-UI regardless of starting with/without Docker

**Go to the client-ui folder and create .env file:**
  ```bash
  sudo nano .env
  ```
and paste `NODE_ENV=development` and save it.

**Install dependencies and start server:**
  ```bash
  sudo npm install
  ```
  
  ```bash
  sudo nodemon
  ```
