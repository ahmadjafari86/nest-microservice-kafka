import { Controller, Get, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  getHello(): string {
    return this.bookingService.getHello();
  }

  @Post()
  async transcode() {
    return this.bookingService.transcode();
  }
}
