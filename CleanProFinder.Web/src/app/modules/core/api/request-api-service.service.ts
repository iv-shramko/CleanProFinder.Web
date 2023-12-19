// request-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActiveRequestModel } from 'src/app/modules/core/api/models/active-request.model';
import { AssignRequestModel } from 'src/app/modules/core/api/models/assign-request.model';
import { MyRequestModel } from 'src/app/modules/core/api/models/my-request.model';
import { RequestModel } from 'src/app/modules/core/api/models/request.model';
import { AcceptProviderModel } from 'src/app/modules/core/api/models/accept-provider.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestApiService {
  private baseUrl = `${environment.apiUrl}/Request`;

  constructor(private http: HttpClient) {}

  //create
  create(requestModel: RequestModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/create`, requestModel);
  }

  //get active
  getActiveRequests(): Observable<ActiveRequestModel[]> {
    return this.http.get<ActiveRequestModel[]>(`${this.baseUrl}/active-requests`);
  }

  //get my requests
  getAllMyRequests(): Observable<MyRequestModel[]> {
    return this.http.get<MyRequestModel[]>(`${this.baseUrl}/my-requests`);
  }

  //get my request
  getMyRequest(id: string): Observable<MyRequestModel> {
    return this.http.get<MyRequestModel>(`${this.baseUrl}/my-requests/${id}`);
  }

  //get request
  getRequestById(id: string): Observable<MyRequestModel> {
    return this.http.get<MyRequestModel>(`${this.baseUrl}/${id}`);
  }

  //cancel
  cancelRequest(id: string): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/my-requests/cancel/${id}`);
  }

  //assign
  assignRequest(assignRequestModel: AssignRequestModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/assign-request`, assignRequestModel);
  }

  //accept-provider
  acceptProvider(acceptProviderModel: AcceptProviderModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/accept-provider`, acceptProviderModel);
  }
}
