import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  constructor() {}

  @Input() service = {
    name: 'Malloc Cleaning',
    rating: 4,
    description:
      'Lorem ipsum dolor sit amet consectetur. Cursus arcu facilisis egestas habitasadasdsdasdasdnt.',
  };
  ngOnInit(): void {}
}
