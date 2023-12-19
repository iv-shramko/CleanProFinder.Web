import { environment } from 'src/environments/environment';

export const AUTH_URIS = {
  serviceProviderProfileCreate: `${environment.apiUrl}/Profile/service-provider/edit`,
  customerProfileCreate: `${environment.apiUrl}/Profile/service-user/edit`,
  login: `${environment.apiUrl}/Account/sign-in`,
  createUser: `${environment.apiUrl}/Account/service-user/create`,
  createProvider: `${environment.apiUrl}/Account/service-provider/create`,
};
