import { Injectable } from '@nestjs/common';
import { GetUSerRequest } from './get-user-request.dto';

@Injectable()
export class AuthService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: 321,
    },
    {
      userId: '456',
      stripeUserId: 654,
    },
  ];
  getHello(): string {
    return 'Hello World! from auth service';
  }

  getUser(getUSerRequest: GetUSerRequest) {
    return this.users.find((user) => user.userId === getUSerRequest.userId);
  }
}
