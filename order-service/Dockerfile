FROM node:14.18.1

# Specify the working directory inside the container
WORKDIR /usr/src/app

# Copy the source code
COPY . .

# Install the dependencies
RUN npm install

# Expose the port
EXPOSE 3000

# Start the node server
CMD ["npm", "start"]
