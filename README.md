# Calendar Demo - Backend

## Project Overview

This is the backend service for the calendar scheduling application, built using Express.js. It handles API requests and interacts with AWS services for data persistence.

## Tech Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **Express.js**: Web framework for Node.js, used to build APIs.
- **AWS Lambda**: Serverless computing for backend logic.
- **AWS DynamoDB**: NoSQL database service for storing application data.
- **AWS API Gateway**: Managed service to create, publish, and secure APIs.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or above)
- **npm** (v6.x or above)

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JarrettGuo/Calendar-server.git
   cd calendar-demo-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **API Documentation**:
   Access the API documentation at `http://localhost:3000`

## Folder Structure

```plaintext
src/
|-- controllers/     # API request handlers
|-- models/          # Data models and schemas
|-- routes/          # API routes
|-- services/        # Business logic and external service interactions
|-- app.js           # Express app configuration
|-- server.js        # Server entry point
```

## Additional Notes

- **Environment Variables**: Ensure to configure your AWS credentials and other environment variables in a `.env` file.
- **Database**: This project uses AWS DynamoDB for data storage. Ensure that your DynamoDB instance is set up correctly.
