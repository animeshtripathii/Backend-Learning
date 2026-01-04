# Day 4: Learning HTTP Methods and Express 🚀

On Day 4, I learned about HTTP, its methods, and Express. Here is a detailed explanation of each topic:

## HTTP (HyperText Transfer Protocol) 🌐
HTTP is the protocol used for communication between clients (like browsers) and servers on the web. It defines how requests and responses are formatted and transmitted.

### HTTP Methods 🔑
HTTP methods specify the type of action to perform on a resource. The main methods are:
- **GET** 🟢: Retrieves data from the server. Used to request information without making any changes.
- **POST** 📝: Sends data to the server to create a new resource. Commonly used for submitting forms.
- **PUT** 🛠️: Updates an existing resource on the server. Replaces the entire resource with the new data.
- **PATCH** ✏️: Partially updates an existing resource. Only the specified fields are updated.
- **DELETE** ❌: Removes a resource from the server.

Each method serves a specific purpose in RESTful APIs and web applications.

## Express.js ⚡
Express is a popular Node.js framework for building web applications and APIs. It simplifies server creation and routing.

### Key Features of Express 🏗️
- **Routing** 🗺️: Easily define routes for different HTTP methods and URLs.
- **Middleware** 🧩: Functions that process requests before they reach the route handler (e.g., for logging, authentication, parsing JSON).
- **Request and Response Handling** 📦: Provides objects to access request data and send responses.
- **Error Handling** 🚨: Built-in support for managing errors in the application.

### Example Express Usage 💻
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

This example creates a simple server that responds to GET requests at the root URL.

---
