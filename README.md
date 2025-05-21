# Tasks and Users API

A NestJS-based REST API for managing tasks and users with PostgreSQL database.

## Features

- User management (CRUD operations)
- Task management (CRUD operations)
- Swagger API documentation
- PostgreSQL database integration
- Input validation using class-validator
- TypeORM for database operations
- DTOs for request validation

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd connect-bd
```

2. Install dependencies:

```bash
npm install
```

3. Make sure PostgreSQL is running and create the database:

```bash
createdb apicurso
```

## Running the Application

```bash
# Development
npm run start

# Watch mode
npm run start:dev

# Production mode
npm run start:prod
```

The application will be available at `http://localhost:3000`

## API Documentation

Swagger documentation is available at `http://localhost:3000/docs`

### Users Endpoints

- `GET /users` - Get all users
- `GET /users/:id` - Get a specific user
- `POST /users` - Create a new user
  ```json
  {
    "name": "John Doe", // Required, minimum 2 characters
    "email": "john@example.com" // Required, valid email format
  }
  ```

### Tasks Endpoints

- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get a specific task
- `POST /tasks` - Create a new task
  ```json
  {
    "title": "Learn NestJS", // Required, minimum 3 characters
    "userId": 1 // Required, must be a number
  }
  ```

## Data Validation

The API uses class-validator for input validation:

### User Validation

- Name: Required, minimum 2 characters
- Email: Required, must be a valid email format

### Task Validation

- Title: Required, minimum 3 characters
- UserId: Required, must be a number

## Database Configuration

The application uses PostgreSQL with the following default configuration:

- Host: localhost
- Port: 5432
- Database: apicurso
- Username: postgres
- Password: (empty by default)

You can modify these settings in `src/app.module.ts`

## Project Structure

```
src/
├── main.ts              # Application entry point
├── app.module.ts        # Root module
├── tasks/              # Tasks module
│   ├── tasks.controller.ts
│   ├── tasks.service.ts
│   ├── task.entity.ts
│   └── dto/
│       └── create-task.dto.ts
└── users/              # Users module
    ├── users.controller.ts
    ├── users.service.ts
    ├── user.entity.ts
    └── dto/
        └── create-user.dto.ts
```

## Technologies Used

- NestJS
- TypeORM
- PostgreSQL
- Swagger/OpenAPI
- class-validator
- class-transformer

## License

MIT
