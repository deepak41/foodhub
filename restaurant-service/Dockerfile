FROM node:14.18.1

# Specify the working directory INSIDE the container
WORKDIR /usr/src/app

# Copy the source code
COPY . .

# Install the dependencies
RUN npm install

# Start the node server
CMD ["npm", "start"]
