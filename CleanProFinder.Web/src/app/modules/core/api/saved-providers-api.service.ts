// saved-providers-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaveProviderModel } from 'src/app/modules/core/api/models/saved-provider.model';

@Injectable({
  providedIn: 'root',
})
export class SavedProvidersApiService {
  private baseUrl = 'https://api.example.com/my-saved-providers';

  constructor(private http: HttpClient) {}

  save(id: string): Observable<SaveProviderModel> {
    return this.http.post<SaveProviderModel>(`${this.baseUrl}/save/${id}`, {});
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getSavedProviders(): Observable<SaveProviderModel[]> {
    return this.http.get<SaveProviderModel[]>(`${this.baseUrl}`);
  }
}
