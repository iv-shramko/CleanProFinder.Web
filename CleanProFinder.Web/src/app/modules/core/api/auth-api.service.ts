import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_URIS } from 'src/app/modules/core/api/api-uris';
import { CustomerProfileCreateModel } from 'src/app/modules/core/api/models/customer-profile-create.model';
import { ServiceProviderProfileCreateModel } from 'src/app/modules/core/api/models/service-provider-profile-create.model';
import { LoginModel } from 'src/app/modules/core/api/models/login.model';
import { CreateProviderModel } from './models/create-provider.model';
import { CreateUserModel } from './models/create-user.model';

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
      createModel,
      {
        headers: this.authHeaders(),
      }
    );
  }

  createCustomerProfile(createModel: CustomerProfileCreateModel): Observable<any> {
    return this.httpClient.post<any>(this.uris.customerProfileCreate, createModel, {
      headers: this.authHeaders(),
    });
  }

  login(model: LoginModel): void {
    this.httpClient.post<any>(this.uris.login, model).subscribe((res) => {
      localStorage.setItem('authToken', res.bearer);
      window.location.assign('/');
    });
  }

  createUser(model: CreateUserModel): void {
    this.httpClient.post<any>(this.uris.createUser, model).subscribe((res) => {
      localStorage.setItem('authToken', res.bearer);
      window.location.assign('/auth/customer');
    });
  }

  createProvider(model: CreateProviderModel): void {
    this.httpClient.post<any>(this.uris.createProvider, model).subscribe((res) => {
      localStorage.setItem('authToken', res.bearer);
      window.location.assign('/auth/service-provider');
    });
  }

  isAuthenticated() {
    return !!this.getAuthToken();
  }

  authHeaders(): { [header: string]: string } {
    let token = this.getAuthToken();
    if (!token) {
      return {};
    }
    return { Authorization: `Bearer ${token}` };
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated() {
    //check token
    return true;
  }
}
