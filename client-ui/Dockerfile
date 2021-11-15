FROM node:15.5.0

# Specify the working directory inside the container
WORKDIR /usr/src/app

# Copy the source code
COPY . .

# Install the dependencies
RUN npm install

# Expose the port
EXPOSE 5000

# Start the node server
CMD ["npm", "start"]
