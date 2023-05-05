# UI Interview: CSV Parser


For this challenge, we want to create an Express authorization middleware that will be run for all subsequent routes. Then, we want to create a CSV parser API that will query the Pokemon API and save the data to a CSV file. The API should also be able to pull the data from the CSV file and return it as a JSON object.

Write your code in [src/app.ts](./src/app.ts) to complete the challenge. 

The TypeScript Express server is already set up with a `/users/login` route that returns a JWT token. You can call the login route and use this token to test your authorization middleware.

For auth, we are using JWT ([jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)), implemented with [Bearer Authentication](https://swagger.io/docs/specification/authentication/bearer-authentication/) (also called token authentication).


## Requirements
1. Auth 
  - Express Middleware that checks if there is a valid Authorization header
  - check for Authorization header with a valid Bearer token
  - Assess the validity of the token
    - If the token is missing/invalid, Return an appropriate response
    - If the token is valid, Set the user on the request object
2. CSV Parser
  - POST /csv
    - Fetches external data from the Pokemon API at [https://pokeapi.co/api/v2/pokemon?limit=15](https://pokeapi.co/api/v2/pokemon?limit=15)
    - Parses the data 
    - Generates an id which is a random string (fixed length of 10 characters)
    - Saves the data to a file
      - Saving the file in any directory in the workspace/server is fine
      - Save it with the format <randomstring-from-last-step>.csv
    - Returns the randomstring as a "id" property on the response object
  - GET /csv/:id
    - Fetches the file with the name <id>.csv
    - Parses the data
    - Returns the parsed data as a JSON object