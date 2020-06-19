import { Subjects } from '../types/subjects';
import { OrderStatus } from '../types/order-status';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version: number;
    userId: string;
    status: OrderStatus;
    expiresAt: string;
    ticket: { id: string; price: number };
  };
}
