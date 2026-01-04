# Day 6

## What I Learned

On Day 6, I learned about middleware in Express.js. Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. Middleware can execute code, modify the request and response objects, end the request-response cycle, or call the next middleware in the stack using `next()`.

### Types of Middleware

1. **Application-level Middleware**: Bound to an instance of `express()` using `app.use()` or `app.METHOD()`.
2. **Router-level Middleware**: Works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`.
3. **Error-handling Middleware**: Defined with four arguments, where the first is the error object.
4. **Built-in Middleware**: Provided by Express, such as `express.json()` and `express.urlencoded()`.
5. **Third-party Middleware**: Installed via npm, like `morgan` or `cors`.

### Examples

- **express.json()**: This built-in middleware parses incoming requests with JSON payloads and is based on `body-parser`. It is used as:

  ```js
  app.use(express.json());
  ```
  This allows you to access `req.body` as a JavaScript object.

- **next()**: The `next` function is used to pass control to the next middleware function. If not called, the request will be left hanging.

  ```js
  app.use((req, res, next) => {
    console.log('This is a middleware');
    next();
  });
  ```

- **Custom Middleware Example**:

  ```js
  function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
  }
  app.use(logger);
  ```

### How Middleware Works

- Middleware functions are executed sequentially, in the order they are added.
- They can modify `req` and `res` objects, end the response, or pass control to the next middleware.
- If a middleware does not call `next()`, the request will not proceed further.

### Error-handling Middleware

- Error-handling middleware has four parameters: `(err, req, res, next)`.
- Used to catch and handle errors in the application.

  ```js
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  ```

### Summary

Middleware is a powerful feature in Express.js that allows you to handle requests, responses, and errors efficiently. Understanding how to use and create middleware is essential for building robust Express applications.
