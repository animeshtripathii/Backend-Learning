const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url=='/'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello ji kaisa hai aap');
    } 
    else if(req.url=='/about'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the about page');
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


// const server = http.createServer((req, res) => {
    
//     // --- INSPECTING THE REQUEST ---
//     console.log("--- NEW REQUEST RECEIVED ---");
    
//     // 1. The Basics
//     console.log("URL:", req.url);          // e.g., "/" or "/about"
//     console.log("Method:", req.method);    // e.g., "GET" or "POST"
    
//     // 2. The Headers (Metadata about the browser)
//     console.log("Headers:", req.headers);  
//     // This prints a smaller object with User-Agent, Host, etc.

//     // --- SENDING RESPONSE ---
//     res.end('Check your terminal!');
// });
