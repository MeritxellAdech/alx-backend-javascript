# NodeJS Basics
This directory contains the source code of the implementation of some basic concepts in Node.


## Required
Create the following files on your directory 

`package.json`
```js
{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
```

`babel.config.js`
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

`.eslintrc.js`
```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```



## Setup
The following files are required to have the environment properly configured `.eslintrc.js`, `package.json`, and `babel.config.js`

* On your terminal run the following command to install the needed dependencies.
  
```js 
    npm install
```

## Run
To run or execute a node file, the following approach can be used

```js
node filename.js
```
> [!Note]
> Depending on the task at hand, more than one terminal would be necessary to set in place for testing code.

## Test cases

`0-test`
```js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");
```

`1-test`
```js
root:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
root:~$ 
root:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
root:~$ 
```

`2-test`
```js
const countStudents = require('./2-read_file');

countStudents("nope.csv");
```

`3-test`
```js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
```

`4-test`
* Terminal 1
```js
root:~$ node 4-http.js
```
* Terminal 2
```js
root:~$ curl localhost:1245 && echo ""
Hello Holberton School!
root:~$ 
root:~$ curl localhost:1245/any_endpoint && echo ""
Hello Holberton School!
root:~$ 
```

`5-test`

* Terminal 1:
```js
root:~$ node 5-http.js database.csv
...
```

* Terminal 2:
```js
root:~$ curl localhost:1245 && echo ""
Hello Holberton School!
root:~$ 
root:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
root:~$
```

`6-test`
* In terminal 1:
```js
root:~$ node 6-http_express.js
...
```

* In terminal 2:
```js
root:~$ curl localhost:1245 && echo ""
Hello Holberton School!
root:~$ 
root:~$ curl localhost:1245/any_endpoint && echo ""
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Error</title>
    </head>
    <body>
        <pre>Cannot GET /lskdlskd</pre>
    </body>
</html> 
root:~$ 
```


`7-test`
* Terminal 1:
```js
root:~$ node 7-http_express.js database.csv
...
```
* In terminal 2:
```js
root:~$ curl localhost:1245 && echo ""
Hello Holberton School!
root:~$ 
root:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
root:~$ 
```

`8-test`

* In terminal 1:
```js
root:~$ npm run dev
...
```
* In terminal 2:
```js
root:~$ curl localhost:1245 && echo ""
Hello Holberton School!
root:~$ 
root:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
root:~$ 
root:~$ curl localhost:1245/students/SWE && echo ""
List: Guillaume, Joseph, Paul, Tommy
root:~$ 
root:~$ curl localhost:1245/students/French -vvv && echo ""
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 1245 (#0)
> GET /students/SWES HTTP/1.1
> Host: localhost:1245
> User-Agent: curl/7.58.0
> Accept: */*
>
< HTTP/1.1 500 Internal Server Error
< X-Powered-By: Express
< Date: Mon, 06 Jul 2020 03:29:00 GMT
< Connection: keep-alive
< Content-Length: 33
<
* Connection #0 to host localhost left intact
Major parameter must be CS or SWE
root:~$ 
```
