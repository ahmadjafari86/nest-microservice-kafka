import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  getHello(): string {
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', '456', 345000),
    );
    return 'Hello World! from api gateway';
  }
}
