# React Todo App

This project is a simple **Todo application built with React, TypeScript, and Vite**.  
It was created by following a tutorial as part of a learning exercise.

## Features
- Add new todos with a text input
- Mark todos as completed (with checkbox)
- Delete todos
- Separation of completed and active todos
- State persistence using **localStorage**
- Styled with CSS and Emotion

## Project Structure
```
├── App.tsx               # Main application logic
├── TodoInput.tsx         # Input component for adding todos
├── TodoList.tsx          # Component to display todos (active + completed)
├── types.tsx             # Type definitions (Todo interface)
├── common-styles.tsx     # Reusable flexbox CSS utilities
├── App.css               # Component-specific styles
├── index.css             # Global styles
├── main.tsx              # Application entry point
├── vite-env.d.ts         # Vite type definitions
```

## Requirements
- Node.js (>= 16)
- npm or yarn

## Setup & Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/USERNAME/REPOSITORY.git
   cd REPOSITORY
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the app in your browser at:
   ```
   http://localhost:5173
   ```

## License
This project was built by following a tutorial and is intended for learning purposes.  
Feel free to modify and extend it for your own projects.
