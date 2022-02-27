import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/hello")
  getRootRoute() {
    return "Hello World from nestjs";
  }

  @Get("/bye")
  getByeRoute() {
    return "Bye! from nestjs";
  }
}
