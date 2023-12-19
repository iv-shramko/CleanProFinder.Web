import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CleaningServiceShort } from 'src/app/modules/core/api/models/cleaing-service-short.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CleaningServiceApiService {
  private baseUrl = `${environment.apiUrl}/CleaningService`;

  constructor(private http: HttpClient) {}

  create(data: CleaningServiceShort): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/create`, data);
  }

  getAll(): Observable<CleaningServiceShort[]> {
    return this.http.get<CleaningServiceShort[]>(`${this.baseUrl}/services`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  edit(id: string, data: CleaningServiceShort): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/edit`, data);
  }
}
