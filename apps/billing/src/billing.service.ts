import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class BillingService {
  getHello(): string {
    return 'Hello World! billing';
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    console.log(orderCreatedEvent);
  }
}
