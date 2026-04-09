// // import express from 'express';
// // import path from 'path';
// // import { fileURLToPath } from 'url'; // Required for ES module to get __dirname

// // const app = express();
// // const PORT = 3000;

// // // Middleware to parse JSON
// // app.use(express.json());

// // // Resolve __dirname in ES module
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // console.log("🚀 Starting the server...");

// // // Define a single GET route for '/'
// // app.get('/', (req, res) => {
// //     console.log("Hey, it's a GET request");
// //     res.send('hello world 2');
// // });

// // // Define POST request separately
// // app.post('/', (req, res) => {
// //     console.log("Hey, it's a POST request");
// //     res.send('Hello world POST!');
// // });

// // // Define PUT request
// // app.put('/', (req, res) => {
// //     console.log("Hey, it's a PUT request");
// //     res.send('Hello world PUT');
// // });

// // // Serve static HTML file correctly

// // app.get('/index', (req, res) => {
// //     console.log("Hey, it's index");
// //     res.sendFile('templates/index.html', { root: __dirname });
// // });

// // // Start the server
// // app.listen(PORT, () => {
// //     console.log(`✅ Server is running at: http://localhost:${PORT}`);
// // });

// //   GLOBAL OBJECTS
// // global.mylet = 60;
// // console.log(global.mylet);

// // //Inline javascript
// // node -e "console.log('Hello Wordl')"

// // // Debugging using Chrome Dev Tools
// // const a = 5;
// // const b = 10;

// // debugger; // 👈 This will pause execution here

// // const result = a + b;
// // console.log("Result is:", result);





// // // TO CHECK THE CORES OF YOUR CPU
// // import fs from 'fs'; 
// // // import os from 'os';

// // console.log(os.cpus().length);



// // import express from 'express';
// // import path from 'path';
// // import { fileURLToPath } from 'url'; // Required for ES module to get __dirname
// // console.log("Hello, Node.js is working!"); 
// // console.log("Hellow world 2");



// //Event loops
// // import express from 'express';
// // import path from 'path';
// // import { fileURLToPath } from 'url'; // Required for ES module to get __dirname 

// // console.log('First'); //Sync code runs first ('First', 'Fourth')
// // setTimeout(() => console.log('Third'), 0);  //Timers execute last ('Third')
// // Promise.resolve().then(() => console.log('Second')); //Microtasks (Promises) run before the next phase ('Second')
// // console.log('Fourth'); //Sync code runs first ('First', 'Fourth')



// //EXAMPLE 2
// // console.log('1. Start');

// // // Next tick queue
// // process.nextTick(() => console.log('2. Next tick'));

// // // Microtask queue (Promise)
// // Promise.resolve().then(() => console.log('3. Promise'));

// // // Timer phase
// // setTimeout(() => console.log('4. Timeout'), 0);

// // // Check phase
// // setImmediate(() => console.log('5. Immediate'));

// // console.log('6. End');


/*EXAMPLE 3 of EVENT LOOP*/
// console.log("Start");

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 0);

// console.log("End");



/*   setTimeout vs setImmediate Example   */

// setTimeout(() => console.log("setTimeout"), 0);
// setImmediate(() => console.log("setImmediate"));




/****🧪 Microtasks Example (Important) ****/
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => {
  console.log("nextTick");
});

console.log("End");




// // const fs = require('fs');

// // console.log('1. Starting async read...');
// // fs.readFile('myfile.txt', 'utf8', (err, data) => {
// //   if (err) throw err;
// //   console.log('2. File contents:', data);
// // });

// // console.log('3. Done starting read operation');



// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// function area(l, b) {
//   return l * b;
// }

// console.log(area(5, 10));

// //SYNCHORONOUS FILE READ
// import fs from 'fs';
// console.log('Starting sync file read...');
// const data = fs.readFileSync('myfile.txt', 'utf8');
// console.log('File contents:', data);
// console.log('Done with sync file read');




//Creating and using promises
// const myPromise = new Promise((resolve, reject) => {
//   // Simulate an async operation (e.g., API call, file read)
//   setTimeout(() => {
//     const success = Math.random() > 0.5;
    
//     if (success) {
//       resolve('Operation completed successfully');
//     } else {
//       reject(new Error('Operation failed'));
//     }
//   }, 1000); // Simulate delay
// });

// // Using the Promise
// myPromise
//   .then(result => console.log('Success:', result))
//   .catch(error => console.error('Error:', error.message));



// Node.js Managing Dependencies
// npm install
// npm install express 
// npm install -g nodemon
// npm install express --save # or simply npm install express
// npm install fancy-feature --save-optional
// # or
// npm install fancy-feature -O




// TO SHOW THE STATE OF A PROMISE 
const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        myPromise
        .then(
            result => console.log(result),
            error => console.error(error)
        )},2000);
}); 


    console.log(myPromise);


// RUNNING MULITPLE PROMISES IN PARALLEL
const fs=rquire('fs').promises;
const myPromise1 = Promise.resolve('First result');
const myPromise2 = new Promise((resolve)=> setTimeout(()=>resolve('Second result'), 2000));
const myPromise3 = fs.readFile('myfile.txt', 'utf8');

Promise.all([[myPromise1, promise2, promise3]])
.then(results=>{
    console.log('Results:', reuslts)
})





const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello from Node.js server!');
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});