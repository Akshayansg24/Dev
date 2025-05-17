# Use node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build for production (if React)
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
