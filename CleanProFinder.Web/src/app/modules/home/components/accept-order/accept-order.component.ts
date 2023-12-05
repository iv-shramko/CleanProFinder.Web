import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/modules/core/api/models/order.model';

@Component({
  selector: 'app-accept-order',
  templateUrl: './accept-order.component.html',
  styleUrls: ['./accept-order.component.scss'],
})
export class AcceptOrderComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  order: Order | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const orderId = params.get('orderId');
      this.order =
        (JSON.parse(localStorage.getItem('pending-orders')!) as Order[]).find(
          (o) => o.id === orderId
        ) || null;
    });
  }

  confirmOrder(): void {
    let orders = JSON.parse(localStorage.getItem('pending-orders')!);
    orders.find((o: Order) => o.id === this.order!.id).hidden = true;
    localStorage.setItem('pending-orders', JSON.stringify(orders));
    window.location.href = '/pending-orders';
  }
}
