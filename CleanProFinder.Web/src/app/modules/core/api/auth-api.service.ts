import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_URIS } from 'src/app/modules/core/api/api-uris';
import { LoginModel } from 'src/app/modules/core/api/models/login.model';
import { CreateProviderModel } from './models/create-provider.model';
import { CreateUserModel } from './models/create-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly uris = AUTH_URIS;
  constructor(private httpClient: HttpClient) { }

  login(model: LoginModel): Observable<any> {
    return this.httpClient.post<any>(this.uris.login, model);
  }

  createUser(model: CreateUserModel): Observable<any> {
    return this.httpClient.post<any>(this.uris.createUser, model);
  }

  createProvider(model: CreateProviderModel): Observable<any> {
    return this.httpClient.post<any>(this.uris.createProvider, model);
  }
}
