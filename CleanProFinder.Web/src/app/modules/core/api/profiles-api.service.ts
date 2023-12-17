import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CleaningServiceEditModel } from 'src/app/modules/core/api/models/cleaing-service-edit.model';
import { CustomerProfileEditModel } from 'src/app/modules/core/api/models/customer-profile-edit.model';
import { CustomerProfile } from 'src/app/modules/core/api/models/customer-profile.model';
import { ServiceProviderEditModel } from 'src/app/modules/core/api/models/provider-profile-edit.model';
import { ServiceProviderProfile } from 'src/app/modules/core/api/models/provider-profile.model';
import { ServiceProviderFullModel } from 'src/app/modules/core/api/models/service-provide-request-create.model';
import { ServiceProviderModel } from 'src/app/modules/core/api/models/service-provider';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfilesApiService {
  private baseUrl = `${environment.apiUrl}/Profile`;

  constructor(private http: HttpClient) {}

  getCustomerProfile() {
    return this.http.get<CustomerProfile>(`${this.baseUrl}/service-user/info`);
  }

  getProviderProfile() {
    return this.http.get<ServiceProviderProfile>(
      `${this.baseUrl}/service-provider/info`
    );
  }

  getServiceProviderList() {
    return this.http.get<ServiceProviderFullModel[]>(
      `${this.baseUrl}/service-user/providers`
    );
  }

  updateCustomerProfile(editModel: CustomerProfileEditModel) {
    return this.http.post(`${this.baseUrl}/service-user/edit`, editModel);
  }

  updateProviderProfile(editModel: ServiceProviderEditModel) {
    return this.http.post(`${this.baseUrl}/service-provider/edit`, editModel);
  }

  editProviderServices(services: CleaningServiceEditModel[]) {
    return this.http.post(`${this.baseUrl}/service-provider/edit-services`, services);
  }

  getServiceProviderListItem(id: string) {
    return this.http.get<ServiceProviderModel>(
      `${this.baseUrl}/service-user/providers/${id}`
    );
  }
}
