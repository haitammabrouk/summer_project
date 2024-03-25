# Academic Project Management Platform

The Academic Project Management Platform is a web application designed to manage final year projects of engineering students. It provides a centralized platform for students, project advisors (encadrants), and administrators to collaborate effectively throughout the project lifecycle. Built using modern web technologies such as Spring Boot, Spring MVC, Spring Data, React.js, and Tailwind CSS, the platform offers a seamless user experience.

## Features

### 1. Project Submission and Modification
Students can submit their final year projects within a specified deadline. They can also modify their projects under the deadline, allowing for iterative improvements based on feedback.

### 2. Project Advisor (Encadrant) Role
Project advisors have access to reports of their assigned students' projects. They can provide feedback, notes, and assign grades to evaluate the project's progress. Additionally, they can determine whether a student has successfully completed their final year project.

### 3. Administration Access
Administrators have access to all projects on the platform. They oversee the entire project management process, including setting deadlines, managing user roles, and archiving successful projects for future reference.

### 4. Project Archiving
Successfully completed projects are archived for future reference. This allows future students to benefit from past projects and provides a repository of successful project examples.

## Technologies Used

- **Spring Boot**: Provides the backend framework for building robust and scalable Java applications.
- **Spring MVC**: Facilitates the development of web applications based on the Model-View-Controller architecture.
- **Spring Data**: Simplifies data access and persistence by providing a consistent data access layer.
- **React.js**: A JavaScript library for building user interfaces, enabling dynamic and interactive frontend experiences.
- **Tailwind CSS**: A utility-first CSS framework that helps in quickly building custom designs with minimal effort.

## Getting Started

To run the Academic Project Management Platform locally, follow these steps:

1. Clone the repository:
git clone https://github.com/haitammabrouk/summer_project


2. Navigate to the project directory:

3. Install dependencies for both backend and frontend:
// For backend
cd backend
mvn install

// For frontend
cd frontend
npm install


4. Configure database settings in `application.properties` file located in the `backend/src/main/resources` directory.

5. Run the backend server:
mvn spring-boot:run

6. Run the frontend development server:
npm run dev

7. Access the application in your web browser at `http://localhost:3000`.

## Contributors

- Mabrouk Haitam
