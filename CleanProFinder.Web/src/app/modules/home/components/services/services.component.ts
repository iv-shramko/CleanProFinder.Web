import { ServiceProviderFullModel } from 'src/app/modules/core/api/models/service-provide-request-create.model';
import { ProfilesApiService } from './../../../core/api/profiles-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(private ProfilesApiService: ProfilesApiService) {}

  serviceProviders: ServiceProviderFullModel[] = [];
  ngOnInit(): void {
    this.ProfilesApiService.getServiceProviderList().subscribe(
      (list) => (this.serviceProviders = list)
    );
  }
}
