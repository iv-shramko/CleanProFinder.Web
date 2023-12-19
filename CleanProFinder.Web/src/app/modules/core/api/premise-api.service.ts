// premise-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Premise } from 'src/app/modules/core/api/models/premise.model';
import { CreatePremiseModel } from 'src/app/modules/core/api/models/create-premise.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PremiseApiService {
  private baseUrl = `${environment.apiUrl}/Premise`;

  constructor(private http: HttpClient) {}

  create(data: CreatePremiseModel): Observable<Premise> {
    return this.http.post<Premise>(`${this.baseUrl}/create`, data);
  }

  edit(id: string, data: Premise): Observable<Premise> {
    return this.http.post<Premise>(`${this.baseUrl}/edit`, data);
  }

  getAll(): Observable<Premise[]> {
    return this.http.get<Premise[]>(`${this.baseUrl}/my-premises`);
  }

  getById(id: string): Observable<Premise | null> {
    return this.http.get<Premise | null>(`${this.baseUrl}/full-info?premiseId=${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}?premiseId=${id}`);
  }
}
