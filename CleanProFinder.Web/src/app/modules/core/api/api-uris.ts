import { environment } from 'src/environments/environment';

export const AUTH_URIS = {
  login: `${environment.apiUrl}/api/Account/sign-in`,
  createUser: `${environment.apiUrl}/api/Account/service-user/create`,
  createProvider: `${environment.apiUrl}/api/Account/service-provider/create`,
};
