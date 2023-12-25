// saved-providers-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaveProviderModel } from 'src/app/modules/core/api/models/saved-provider.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SavedProvidersApiService {
  private baseUrl = `${environment.apiUrl}/SavedProvider/my-saved-providers`;

  constructor(private http: HttpClient) {}

  save(id: string): Observable<SaveProviderModel> {
    return this.http.get<SaveProviderModel>(`${this.baseUrl}/save/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/delete/${id}`);
  }

  getSavedProviders(): Observable<SaveProviderModel[]> {
    return this.http.get<SaveProviderModel[]>(`${this.baseUrl}`);
  }
}
