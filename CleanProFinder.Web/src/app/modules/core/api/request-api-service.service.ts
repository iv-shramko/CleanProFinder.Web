// request-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActiveRequestModel } from 'src/app/modules/core/api/models/active-request.model';
import { AssignRequestModel } from 'src/app/modules/core/api/models/assign-request.model';
import { MyRequestModel } from 'src/app/modules/core/api/models/my-request.model';
import { RequestModel } from 'src/app/modules/core/api/models/request.model';
import { AcceptProviderModel } from 'src/app/modules/core/api/models/accept-provider.model';

@Injectable({
  providedIn: 'root',
})
export class RequestApiService {
  private baseUrl = 'https://api.example.com/requests';

  constructor(private http: HttpClient) {}

  create(requestModel: RequestModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}`, requestModel);
  }

  getActiveRequests(): Observable<ActiveRequestModel[]> {
    return this.http.get<ActiveRequestModel[]>(`${this.baseUrl}/active`);
  }

  getRequestById(id: string): Observable<MyRequestModel> {
    return this.http.get<MyRequestModel>(`${this.baseUrl}/${id}`);
  }

  getAllMyRequests(): Observable<MyRequestModel[]> {
    return this.http.get<MyRequestModel[]>(`${this.baseUrl}/my-requests`);
  }

  cancelRequest(id: string): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/my-requests/cancel/${id}`);
  }

  assignRequest(assignRequestModel: AssignRequestModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/assign-request`, assignRequestModel);
  }

  acceptProvider(acceptProviderModel: AcceptProviderModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/accept-provider`, acceptProviderModel);
  }
}
