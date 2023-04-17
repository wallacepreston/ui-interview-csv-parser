import express from 'express';
import jwt from 'jsonwebtoken';
const { JWT_SECRET = '234709asefiaserh181349' } = process.env;

import users from './users.json';

const app = express();

const { PORT = 4000 } = process.env;

app.use(express.json());

app.post('/users/login', async (req, res) => {
  // pull username and password from the request body
  const { username, password } = req.body;
  // find the user in the database
  const user = users.find(user => user.username === username);
  
  // if the user doesn't exist, return a 401
  if (!user) {
    return res.sendStatus(401);
  }

  // if the user exists, check the password
  if (password !== user.password) {
    return res.sendStatus(401);
  }

  // if the password is correct
  if (password === user.password) {
    // create a JWT token with the user object as the payload
    const token = jwt.sign(user, JWT_SECRET);
    // send the token back to the client
    return res.send(token);
  }
});

app.use((req, res, next) => {
  // auth middleware that will be used to protect all the following endpoints
  // 👇 YOUR CODE HERE 👇 
  
});

app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello World!');
});

// POST /csv
// 👇 YOUR CODE HERE 👇 

// GET /csv/:id
// 👇 YOUR CODE HERE 👇 


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
