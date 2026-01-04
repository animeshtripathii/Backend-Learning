# Day 5 - Learning Summary

## Topics Covered

### 1. HTTP and Its Methods
- **HTTP (HyperText Transfer Protocol)** is the foundation of data communication for the web.
- **HTTP Methods:**
  - `GET`: Retrieve data from the server.
  - `POST`: Send data to the server to create something new.
  - `PUT`: Update existing data on the server.
  - `DELETE`: Remove data from the server.

### 2. Express.js Methods
- **`app.use()`**: Middleware function in Express. It is used to set up middleware to respond to HTTP requests. For example, `app.use(express.json())` allows your app to parse incoming JSON requests.
- **`app.post()`**: Handles POST requests. Used to receive data from the client and process it (like creating a new user).
- **Other Methods:**
  - `app.get()`: Handles GET requests.
  - `app.put()`: Handles PUT requests.
  - `app.delete()`: Handles DELETE requests.

### 3. Postman
- **Postman** is a tool for testing APIs. It allows you to send HTTP requests (GET, POST, etc.) to your server and see the responses.
- You can use Postman to check if your backend routes are working as expected.

### 4. JSON vs JavaScript Objects
- **JavaScript Object:**
  - Syntax: `{ key: 'value' }`
  - Used directly in JS code.
- **JSON (JavaScript Object Notation):**
  - Syntax: `{ "key": "value" }` (keys and string values must be in double quotes)
  - Used for data exchange between client and server.
  - JSON is a string format, not a JS object.
- **Difference:**
  - JSON is a text format for storing and transporting data, while JS objects are used in code.
  - You can convert between them using `JSON.stringify()` (object to JSON) and `JSON.parse()` (JSON to object).

### 5. `app.use(express.json())`
- This middleware parses incoming requests with JSON payloads.
- It makes the data available in `req.body` for POST and PUT requests.
- Without this, your Express app cannot read JSON data sent from the client.

---

**Summary:**
Today, I learned about HTTP and its methods, how to use Express.js methods like `app.use` and `app.post`, the importance of Postman for testing APIs, the difference between JSON and JavaScript objects, and how `app.use(express.json())` helps in handling JSON data in Express apps. All these concepts are essential for building and testing backend APIs effectively.
