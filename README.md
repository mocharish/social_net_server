
# FeedBook Server Repository

This repository contains the **FeedBook Server**, which serves as the backend for our project. It connects the client to the database, providing APIs for user authentication, managing friend connections, posts, and more.

---

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Running Instructions](#running-instructions)
- [Environment Setup](#environment-setup)
- [Workflow](#workflow)
- [Repository Links](#repository-links)


---

## Project Description
FeedBook is a social networking platform where users can create and manage posts, connect with friends, and engage with their community. The server is built with a focus on:
- User authentication and authorization.
- Managing user relationships (e.g., friend requests and connections).
- CRUD operations for posts.
- RESTful API endpoints.

---

## Features
- **User Authentication**: Secure login and registration.
- **Friend Management**: Send, accept, and manage friend requests.
- **Posts Management**: Create, update, delete, and view posts.
- **Database Integration**: MongoDB used for persistent data storage.
- **Environment Configuration**: Easily configurable via environment variables.

---

## Running Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mocharish/social_net_server.git
   cd social_net_server
   ```

2. **Initialize the Database**:
   - Import the JSON files from the `db` folder into your MongoDB instance.

3. **Set Up Environment Variables**:
   - Create a `.env.local` file in the `config` folder with the following structure:
     ```env
     CONNECTION_STRING="mongodb://localhost:27017/Feedbook"
     PORT=8080
     ```

4. **Install Dependencies**:
   ```bash
   npm install
   ```

5. **Start the Server**:
   ```bash
   npm start
   ```

6. **Start the Web Client**:
   - Follow the instructions in the [FeedBook Web Repository](https://github.com/mocharish/social_net_web.git).

---

## Environment Setup

Ensure you have the following installed:
- Node.js (v16+ recommended)
- MongoDB (local or cloud instance)
- npm or yarn (for dependency management)

---

## Workflow

### Development Process
- **Planning**:
  - After understanding the project requirements, we brainstormed ideas for implementation and created a Jira board to manage tasks.

- **Task Division**:
  - Tasks were divided among team members, ensuring everyone contributed to both the web and server components.

- **Version Control**:
  - Each team member worked on individual branches.
  - Changes were merged to the main branch via pull requests, ensuring code review and consistency.

- **Code Structure**:
  - The project follows the **MVC (Model-View-Controller)** architecture for clarity and maintainability.

---

## Repository Links
- [FeedBook Server (this repository)](https://github.com/mocharish/social_net_server.git)
- [FeedBook Web](https://github.com/mocharish/social_net_web.git)
- [FeedBook Android](https://github.com/mocharish/A.S_part2.git)

---


