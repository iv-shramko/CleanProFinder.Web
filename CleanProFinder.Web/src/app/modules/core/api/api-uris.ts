import { environment } from 'src/environments/environment';

export const AUTH_URIS = {
  login: `${environment.apiUrl}/api/login`,
  serviceProviderProfileCreate: `${environment.apiUrl}/api/Profile/service-provider/edit`,
  customerProfileCreate: `${environment.apiUrl}/api/Profile/service-user/edit`,
};
