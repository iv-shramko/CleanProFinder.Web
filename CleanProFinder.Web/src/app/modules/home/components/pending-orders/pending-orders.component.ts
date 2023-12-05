import { Component, OnInit } from '@angular/core';
import { Order as OrderBase } from 'src/app/modules/core/api/models/order.model';

type Order = OrderBase & {
  hidden: boolean;
};

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss'],
})
export class PendingOrdersComponent implements OnInit {
  constructor() { }
  orders: Order[] = [];

  ngOnInit(): void {
    if (!localStorage.getItem('pending-orders')) {
      localStorage.setItem(
        'pending-orders',
        JSON.stringify([
          {
            id: 'sjfs8sl4-nad0-4d3a-8b3a-2f8sdff88f8f',
            hidden: false,
            premise: {
              address: 'Kozacka alley 67/2',
              area: 95,
              rooms: 3,
              floor: 4,
              pets: 3,
            },
            services: [
              { name: 'Vacuum' },
              { name: 'Chemo' },
              { name: 'Window cleaning' },
            ],
            description:
              'There are problematic carpet which should be revised with every cleaning. There’s also a cat which may be scared of people',
          },
          {
            id: 'sjfs8sl4-nad0-4d3a-8b3a-2asdasdasdasd',
            hidden: false,
            premise: {
              address: 'Nauky avenue 12',
              area: 56,
              rooms: 2,
              floor: 9,
              pets: 0,
            },
            services: [{ name: 'Floor wash' }, { name: 'Vacuum' }],
            description:
              'Order: 2-bed, 56 sqm Kharkiv apartment (9th floor, no pets). Services: Vacuum, Floor Wash.',
          },
          {
            id: 'sjfs8sl4-nad0-4d3a-8b3a-2f8f8f8f8f8f',
            hidden: false,
            premise: {
              address: 'Peremohy avenue 48',
              area: 108,
              rooms: 4,
              floor: 7,
              pets: 1,
            },
            services: [{ name: 'Shisyat' }, { name: 'Hvatit' }],
            description:
              'Embarking on a cleaning odyssey for my apartment.Seeking the sublime prowess of your services.Bring forth the cleaning magic!',
          },
        ])
      );
    }
    this.orders = JSON.parse(localStorage.getItem('pending-orders')!);
  }

  hideOrder(orderId: string) {
    console.log(orderId);
    const orders = JSON.parse(localStorage.getItem('pending-orders')!);
    const order = orders.find((o: Order) => o.id === orderId);
    if (order) {
      order.hidden = true;
    }
    localStorage.setItem('pending-orders', JSON.stringify(orders));
    this.orders = orders;
  }
}
