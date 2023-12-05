import { Component, Input } from '@angular/core';
import { Order } from 'src/app/modules/core/api/models/order.model';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent {
  @Input() order!: Order;
  constructor() {
    console.log(this.order);
  }
}
