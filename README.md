# Portfolio Backend

## Overview

This project is a Node.js and Express backend application designed to serve data for a portfolio website. The application connects to MongoDB to fetch information and is containerized using Docker. Swagger is used for API documentation.

## Features

- RESTful API to serve portfolio data
- MongoDB for data storage
- Swagger for API documentation
- Docker for containerization and deployment

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Docker](https://www.docker.com/products/docker-desktop)
- [MongoDB](https://www.mongodb.com/) (running instance or a cloud database)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-backend.git
   cd portfolio-backend

### Installation

2. **Install dependencies**

   ```bash
   npm install

3. **Running Locally**

   ```bash
   npm run dev

### Deployment
The application is deployed and available at https://portafolioback-latest.onrender.com.

### API Documentation
API endpoints are documented using Swagger. You can access the documentation at https://portafolioback-latest.onrender.com/api-docs.

#### Endpoints
- GET /presentation - Retrieves presentation data
- GET /about-me - Retrieves information about the individual
- GET /education-and-experience - Retrieves education and work experience data
- GET /my-skills - Retrieves skills data
- GET /contact-me - Retrieves contact information
