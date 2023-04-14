# Use an official Node runtime as a parent image
FROM node:14.16.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to /app
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Build the application
RUN npm run build

# Use the serve package to serve the built application
CMD ["npx", "serve", "-s", "build", "-l", "3000"]