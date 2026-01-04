# Day 3: Learning About Servers in Node.js

On Day 3, I learned about servers and how to create a server in Node.js. Here’s a detailed explanation of all the terms related to server creation and listening:

## What is a Server?
A server is a program that listens for requests from clients (like browsers) and sends back responses. In web development, servers handle HTTP requests and serve web pages or data.

## Creating a Server in Node.js

Node.js provides a built-in module called `http` to create servers.

### Example Code

```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello, World!');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
```

### Key Terms Explained

- **http module**: Built-in Node.js module to create HTTP servers.
- **createServer()**: Method to create a new server. It takes a callback function with `req` (request) and `res` (response) objects.
- **req (Request Object)**: Contains information about the client’s request (URL, method, headers, etc.).
- **res (Response Object)**: Used to send data back to the client.
- **res.write()**: Sends a chunk of the response body.
- **res.end()**: Ends the response. Must be called to finish the response.
- **server.listen(port, callback)**: Starts the server and listens for incoming requests on the specified port. The callback runs once the server starts.

## Summary

- A server listens for requests and sends responses.
- Node.js makes server creation easy with the `http` module.
- Understanding the request and response objects is essential.
- The `listen` method starts the server on a specific port.
