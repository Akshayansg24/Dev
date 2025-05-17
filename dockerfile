# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# 👇 Add this line before build
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the app
RUN npm run build

# Expose port (e.g., 3000)
EXPOSE 3000

# Default command
CMD ["npm", "start"]
