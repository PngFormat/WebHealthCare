import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  // 1. CLIENT: User enter email and password and sends request on our server;
  // 2. SERVER: Getting data from request, data in database, checking username or email;
  // 3. SERVER: Checking password in database, hash password from request and check with database version, if they are equal then sucessfull login,
  // else error with status code 401: "Unauthorized";

  // 1. CLIENT: User enter login and password and sends request on our server;
  // 2. SERVER: Getting data from request, checking data in database, checking login;
  // 3. SERVER: Setting hashed password and username to database, response with status code 201;
  // 4. CLIENT: User was accepted;
}
