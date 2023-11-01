import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_URIS } from 'src/app/modules/core/api/api-uris';
import { CustomerProfileCreateModel } from 'src/app/modules/core/api/models/customer-profile-create.model';
import { ServiceProviderProfileCreateModel } from 'src/app/modules/core/api/models/service-provider-profile-create.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly uris = AUTH_URIS;
  constructor(private httpClient: HttpClient) {}

  createServiceProviderProfile(
    createModel: ServiceProviderProfileCreateModel
  ): Observable<any> {
    return this.httpClient.post<any>(
      this.uris.serviceProviderProfileCreate,
      createModel
    );
  }

  createCustomerProfile(createModel: CustomerProfileCreateModel): Observable<any> {
    return this.httpClient.post<any>(this.uris.customerProfileCreate, createModel);
  }
}
