import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'fodase' };
  }
  signin() {
    return { msg: 'hi' };
  }
}
