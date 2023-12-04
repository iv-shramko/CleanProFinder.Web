import { Component } from '@angular/core';

type Order = {
  premise: Premise;
  services: Service[];
  description?: string;
};

type Premise = {
  address: string;
  area: number;
  rooms: number;
  floor: number;
  pets: number;
};

type Service = {
  name: string;
};

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss'],
})
export class PendingOrdersComponent {
  constructor() { }
  orders: Order[] = [
    {
      premise: {
        address: 'Kozacka alley 67/2',
        area: 95,
        rooms: 3,
        floor: 4,
        pets: 3,
      },
      services: [{ name: 'Vacuum' }, { name: 'Chemo' }, { name: 'Window cleaning' }],
      description:
        'There are problematic carpet which should be revised with every cleaning. There’s also a cat which may be scared of people',
    },
    {
      premise: {
        address: 'Nauky avenue 12',
        area: 56,
        rooms: 2,
        floor: 9,
        pets: 0,
      },
      services: [{ name: 'Vacuum' }, { name: 'Floor wash' }],
      description:
        'Order: 2-bed, 56 sqm Kharkiv apartment (9th floor, no pets). Services: Vacuum, Floor Wash.',
    },
    {
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
  ];
}
