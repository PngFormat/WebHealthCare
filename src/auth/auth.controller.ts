import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  // 1. CLIENT: User enter email and password and sends request on our server;
  // 2. SERVER: Getting data from request, npm install --save @nestjs/typeorm typeormchecking data in database, checking username or email;
  // 3. SERVER: Checking password in database, unhash passowrd from database with secret key, if they are equal then sucessfull login,
  // else error with status code 401: "Unauthorized";

  // 1. CLIENT: User enter email and password and sends request on our server;
  // 2. SERVER: Getting data from request, checking data in database, checking username or email;
  // 3. SERVER: Setting hashed password and username to database, response with status code 201;
  // 4. CLIENT: User was accepted;
}
