import { Get, Param, createHandler } from 'next-api-decorators';

class JopOpeningHandler {
  @Get()
  public list() {
    return 'jobOpenings';
  }

  @Get('/:keyword')
  public keyword(@Param('keyword') keyword: string) {
    return keyword;
  }
}

export default createHandler(JopOpeningHandler);
