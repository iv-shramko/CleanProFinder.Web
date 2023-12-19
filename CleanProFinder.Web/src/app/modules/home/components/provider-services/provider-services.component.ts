import { Component, OnInit } from '@angular/core';
import { CleaningServiceApiService } from 'src/app/modules/core/api/cleaning-service-api.service';
import { CleaningServiceShort } from 'src/app/modules/core/api/models/cleaing-service-short.model';
import { CleaningService } from 'src/app/modules/core/api/models/cleaing-service.model';
import { ProfilesApiService } from './../../../core/api/profiles-api.service';

@Component({
  selector: 'app-provider-services',
  templateUrl: './provider-services.component.html',
  styleUrls: ['./provider-services.component.scss'],
})
export class ProviderServicesComponent implements OnInit {
  constructor(
    private profilesApiService: ProfilesApiService,
    private cleaningApiService: CleaningServiceApiService
  ) { }
  myServices: CleaningService[] = [];
  services: CleaningServiceShort[] = [];

  ngOnInit(): void {
    this.profilesApiService.getProviderProfile().subscribe((res) => {
      this.myServices = res.services;
    });
    this.cleaningApiService.getAll().subscribe((res) => {
      this.services = res;
    });
  }

  saveServices() {
    console.log(this.myServices);
    this.profilesApiService.editProviderServices(this.myServices).subscribe();
  }

  isProvided(serviceId: string) {
    return this.myServices.find((s) => s.cleaningServiceId === serviceId) !== undefined;
  }

  toggleService(serviceId: string) {
    if (this.myServices.find((s) => s.cleaningServiceId === serviceId) !== undefined) {
      this.myServices = this.myServices.filter(
        (s) => s.cleaningServiceId !== serviceId
      );
    } else {
      let service = this.services.find((s) => s.id === serviceId)!;
      this.myServices.push({
        cleaningServiceId: service.id,
        name: service.name,
        price: 0,
        description: 'cleaning service',
      });
    }
  }
}
