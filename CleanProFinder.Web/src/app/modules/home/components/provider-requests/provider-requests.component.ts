import { RequestApiService } from 'src/app/modules/core/api/request-api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActiveRequestModel } from 'src/app/modules/core/api/models/active-request.model';
import { RequestStatus } from 'src/app/modules/shared/enums/request-status';
import { AssignRequestModel } from 'src/app/modules/core/api/models/assign-request.model';

@Component({
  selector: 'app-provider-requests',
  templateUrl: './provider-requests.component.html',
  styleUrls: ['./provider-requests.component.scss'],
})
export class ProviderRequestsComponent implements OnInit {
  constructor(private RequestApiService: RequestApiService) {}

  requests: ActiveRequestModel[] = [];
  isPriceEdit = false;
  requestPrice: number = 0;
  requestForAssign: string = '';

  ngOnInit(): void {
    this.RequestApiService.getActiveRequests().subscribe(
      (res) => (this.requests = res)
    );
  }

  status(value: number) {
    return RequestStatus[value];
  }

  onRequestAssign(requestId: string) {
    this.isPriceEdit = true;
    this.requestForAssign = requestId;
  }

  onRespondToRequest() {
    const assignRequest: AssignRequestModel = {
      requestId: this.requestForAssign,
      price: this.requestPrice,
    };

    this.RequestApiService.assignRequest(assignRequest).subscribe((res) => {
      alert('you assigned successfully');
      this.isPriceEdit = false;
      this.requestPrice = 0;
    });
  }
}
