import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';
import { CreateOrderRequest } from './create-order-request.dto';
import { BookingService } from 'apps/booking/src/booking.service';
import { CheckoutService } from 'apps/booking/src/checkout.service';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
    private readonly bookingService: BookingService,
    private readonly checkoutService: CheckoutService,
  ) {}
  getHello(): string {
    const message = this.bookingService.getHello();
    const message2 = this.checkoutService.getHello();
    return `Hello World! from api gateway ${message + message2}`;
  }

  createOrder({ userId, price }: CreateOrderRequest) {
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
