# CSE Society Club Ecosystem

This project is a web application for managing the CSE Society Club Ecosystem at Comilla University. It includes both a backend and a frontend, providing features for user authentication, club management, event management, and more.

## Table of Contents

- [CSE Society Club Ecosystem](#cse-society-club-ecosystem)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies](#technologies)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Installation](#installation)
    - [Backend](#backend-1)
    - [Frontend](#frontend-1)
  - [Usage](#usage)
    - [Backend](#backend-2)
    - [Frontend](#frontend-2)
  - [API Endpoints](#api-endpoints)
    - [Authentication](#authentication)
    - [Clubs](#clubs)
    - [Admins](#admins)
    - [Dashboard](#dashboard)
    - [Users](#users)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User authentication and authorization
- Club management (create, approve, delete clubs)
- Event management
- User roles (admin, superadmin, member)
- Announcements
- Responsive design

## Technologies

### Backend

- Node.js
- Express.js
- MySQL
- JWT for authentication
- bcrypt for password hashing

### Frontend

- React
- Vite
- Tailwind CSS
- Axios for API requests
- React Router for navigation

## Installation

### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/cse-society-backend.git
    cd cse-society-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/1) file in the root directory and add the following environment variables:
    ```env
    PORT=5000
    DB_HOST=localhost
    DB_USER=<yout username>
    DB_PASS=<your password>
    DB_NAME=<your database name>
    JWT_SECRET=your_secret_key
    ```

4. Start the server:
    ```sh
    npm run dev
    ```

### Frontend

1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

### Backend

The backend server will run on `http://localhost:5000`. You can use tools like Postman to test the API endpoints.

### Frontend

The frontend development server will run on `http://localhost:3000`. Open this URL in your browser to view the application.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/profile` - Get user profile (requires authentication)

### Clubs

- `GET /api/clubs/all` - Get all clubs
- `POST /api/clubs/create` - Create a new club (requires superadmin)
- `POST /api/clubs/approve` - Approve a club (requires superadmin)
- `DELETE /api/clubs/delete/:clubId` - Delete a club (requires superadmin)
- `POST /api/clubs/add-member` - Add a member to a club (requires admin)
- `DELETE /api/clubs/remove-member` - Remove a member from a club (requires admin)

### Admins

- `GET /api/admins/all` - Get all admins (requires superadmin)
- `POST /api/admins/assign` - Assign admin to a club (requires superadmin)
- `POST /api/admins/remove` - Remove admin role (requires superadmin)

### Dashboard

- `GET /api/dashboard/stats` - Get superadmin stats (requires superadmin)

### Users

- `GET /api/users` - Get all users (requires superadmin)
- `PUT /api/users/promote/:userId` - Promote user to admin (requires superadmin)
- `PUT /api/users/demote/:userId` - Demote admin to member (requires superadmin)
- `DELETE /api/users/:userId` - Delete user (requires superadmin)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.