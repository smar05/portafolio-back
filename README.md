# Portfolio Backend

## Overview

This project is the backend for my personal portfolio. It is responsible for managing my profile information and work experience, allowing the modification of the data through a REST API. Additionally, it allows user authentication and profile image uploading, using JWT for authentication and Multer for file management.

# Installation and Configuration

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Docker](https://www.docker.com/products/docker-desktop)
- [MongoDB](https://www.mongodb.com/) (running instance or a cloud database)

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- TypeScript
- Multer
- JWT
- Docker
- Concurrently and Nodemon

## Development environment

1. **Clone the repository**
   ```bash
   git clone https://github.com/smar05/portfolio-back.git
   cd portfolio-backend

2. **Installing dependencies**
   
   Install the necessary dependencies with:
   ```bash
   npm install

4. **Environment variables**
   
   Create a .env file in the project root with the following content:
   ```bash
   PORT=5000
   NODE_ENV=develop
   DB_URI=mongodb+srv://<user>:<password>@cluster0.xnya3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=<mySecret>
   FRONT_URL=http://localhost:<portFront>
   ```

   Make sure to replace 'user' and 'password' with your MongoDB credentials. And 'mySecret' and the 'portFront'.

6. **Project construction**
   
   To compile the TypeScript code and prepare the project for development, run:
   ```bash
   npm run build
   ```

   This will compile the files to Javascript in the build folder.

8. **Run in Development**
   
   To start the server in development mode, run:
   ```bash
   npm run dev
   ```

   This will start a server on port 5000 (or the one specified in .env) with hot reload.

## Production environment
1. **Create the Docker image**
   To deploy to production, first build the Docker image:
   ```bash
   docker build -t portafolioback:latest .

2. **Tag and upload the image**
   Then tag the image and push it to Docker Hub:
   ```bash
   docker tag portafolioback smar05/portafolioback:latest
   docker push smar05/portafolioback:latest

3. **Deployment in Render**
   Once the image has been pushed, you can update the server in [Render](https://render.com/) using the image URL in Docker Hub.

   The backend will be available in:
   https://portafolioback-latest.onrender.com

## Contact Me

If you have any questions or suggestions, feel free to reach out to me via email:

📧 **[mantillasanchezr@gmail.com](mailto:mantillasanchezr@gmail.com)**
