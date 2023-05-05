# UI Interview: CSV Parser

For this challenge, we want to create a CSV parser API that queries the Pokemon API and saves the data to a CSV file. The API should also be able to pull the data from the CSV file and return it as a JSON object. This API should also have authentication and authorization middleware, identifying which user made the request and saved the file.

Write your code in [src/app.ts](./src/app.ts) to complete the challenge.


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
    - Saves the data to a file with the format <randomstring-from-last-step>.csv
    - Returns the randomstring as a "id" property on the response object
  - GET /csv/:id
    - Fetches the file with the name <id>.csv
    - Parses the data
    - Returns the parsed data as a JSON object