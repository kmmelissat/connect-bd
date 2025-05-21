# Tasks and Users API

A NestJS-based REST API for managing tasks and users with PostgreSQL database.

## Features

- User management (CRUD operations)
- Task management (CRUD operations)
- Swagger API documentation
- PostgreSQL database integration
- Input validation
- TypeORM for database operations

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
createdb apicurso1
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
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

### Tasks Endpoints

- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get a specific task
- `POST /tasks` - Create a new task
  ```json
  {
    "title": "Learn NestJS",
    "userId": 1
  }
  ```

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
│   └── task.entity.ts
└── users/              # Users module
    ├── users.controller.ts
    ├── users.service.ts
    └── user.entity.ts
```

## Technologies Used

- NestJS
- TypeORM
- PostgreSQL
- Swagger/OpenAPI
- class-validator
- class-transformer

