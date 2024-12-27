import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World!`;
  }

  getPort(port: string): string {
    console.log(port);
    return `Hello World from server ${port} - IP`;
  }
}
