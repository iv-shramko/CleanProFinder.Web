// premise-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Premise } from 'src/app/modules/core/api/models/premise.model';
import { CreatePremiseModel } from 'src/app/modules/core/api/models/create-premise.model';
@Injectable({
  providedIn: 'root',
})
export class PremiseApiService {
  private baseUrl = 'https://api.example.com/premises';

  constructor(private http: HttpClient) {}

  create(data: CreatePremiseModel): Observable<Premise> {
    return this.http.post<Premise>(`${this.baseUrl}`, data);
  }

  edit(id: string, data: Premise): Observable<Premise> {
    return this.http.put<Premise>(`${this.baseUrl}/${id}`, data);
  }

  getAll(): Observable<Premise[]> {
    return this.http.get<Premise[]>(`${this.baseUrl}`);
  }

  getById(id: string): Observable<Premise | null> {
    return this.http.get<Premise | null>(`${this.baseUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
