import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTH_URIS } from 'src/app/modules/core/api/api-uris';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly uris = AUTH_URIS;
  constructor(private httpClient: HttpClient) {}
}
