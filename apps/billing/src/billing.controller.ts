import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { BillingService } from './billing.service';
import { ClientKafka, EventPattern } from '@nestjs/microservices';

@Controller()
export class BillingController implements OnModuleInit {
  constructor(
    private readonly billingService: BillingService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @EventPattern('order_created')
  handleOrderCreated(data: any) {
    this.billingService.handleOrderCreated(data);
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
