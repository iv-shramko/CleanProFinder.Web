import { Component, OnInit } from '@angular/core';

//TODO move somewhere, add field
type Service = {
  id: number;
  name: string;
  price: number;
  provided: boolean;
};

@Component({
  selector: 'app-provider-services',
  templateUrl: './provider-services.component.html',
  styleUrls: ['./provider-services.component.scss'],
})
export class ProviderServicesComponent implements OnInit {
  constructor() { }
  services: Service[] = [];

  ngOnInit(): void {
    //TODO: call API for that
    let saved = localStorage.getItem('provider-services');
    if (saved) {
      this.services = JSON.parse(saved);
    } else {
      let defaults = { price: 0, provided: false };
      this.services = [
        { id: 1, name: 'Vacuum', ...defaults},
        { id: 2, name: 'Chemo', ...defaults},
        { id: 3, name: 'Rugs & sour', ...defaults},
        { id: 4, name: 'Pisties', ...defaults},
        { id: 5, name: 'Horkies', ...defaults},
        { id: 6, name: 'Anhems', ...defaults},
        { id: 7, name: 'Bards and Figure', ...defaults},
        { id: 8, name: 'Hoppies', ...defaults},
        { id: 9, name: 'Window screening', ...defaults},
      ];
    }
  }

  providedServices(): Service[] {
    return this.services.filter((service) => service.provided);
  }

  toggleService(id: number) {
    let service = this.services.find((service) => service.id === id)!;
    service.provided = !service.provided;
  }

  saveServices() {
    localStorage.setItem('provider-services', JSON.stringify(this.services));
  }
}
