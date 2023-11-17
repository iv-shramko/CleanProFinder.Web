import { Component, OnInit } from '@angular/core';

//TODO move somewhere
type Request = {
  id: string;
  square: number;
  address: string;
  services: Service[];
};

type Service = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss'],
})
export class MyRequestsComponent implements OnInit {
  constructor() { }
  requests: Request[] = [];

  ngOnInit(): void {
    //TODO API call
    this.requests = [
      {
        id: 'sjfs8sl4-nad0-4d3a-8b3a-2f8f8f8f8f8f',
        square: 95,
        address: 'Kharkiv city, Kozacka alley 67/2',
        services: [
          {
            id: 'al49sdfj-4d3a-8b3a-2f8f8f8f8f8f',
            name: 'Vacuum',
          },
          {
            id: 'baefl4sl-4d3a-8b3a-2f8f8f8f8f8f',
            name: 'Chemo',
          },
        ],
      },
      {
        id: 'sjfs8sl4-nad0-4d3a-8b3a-2asdasdasdasd',
        square: 95,
        address: 'Kharkiv city, Kozacka alley 67/2',
        services: [
          {
            id: 'baefl4sl-4d3a-8b3a-2f8f8f8f8f8f',
            name: 'Chemo',
          },
        ],
      },
    ];
  }
}
