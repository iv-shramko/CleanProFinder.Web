import { environment } from 'src/environments/environment';

export const AUTH_URIS = {
  serviceProviderProfileCreate: `${environment.apiUrl}/api/Profile/service-provider/edit`,
  customerProfileCreate: `${environment.apiUrl}/api/Profile/service-user/edit`,
  login: `${environment.apiUrl}/api/Account/sign-in`,
  createUser: `${environment.apiUrl}/api/Account/service-user/create`,
  createProvider: `${environment.apiUrl}/api/Account/service-provider/create`,
};
