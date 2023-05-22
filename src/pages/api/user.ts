import { Get, createHandler } from 'next-api-decorators';

class UserHandler {
  @Get()
  users() {
    return 'Our users';
  }
}

export default createHandler(UserHandler);
