import { Get, createHandler } from 'next-api-decorators';

class JopOpeningHandler {
  @Get()
  jobOpenings() {
    return 'jobOpenings';
  }
}

export default createHandler(JopOpeningHandler);
