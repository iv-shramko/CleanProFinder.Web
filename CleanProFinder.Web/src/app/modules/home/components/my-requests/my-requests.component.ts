import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyRequestModel } from 'src/app/modules/core/api/models/my-request.model';
import { RequestApiService } from './../../../core/api/request-api-service.service';
import { Component, OnInit } from '@angular/core';
import { RequestEditModalComponent } from 'src/app/modules/home/components/request-edit-modal/request-edit-modal.component';
import { RequestStatus } from 'src/app/modules/shared/enums/request-status';

//TODO move somewhere
// type Request = {
//   id: string;
//   square: number;
//   address: string;
//   services: Service[];
// };

// type Service = {
//   id: string;
//   name: string;
// };

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss'],
})
export class MyRequestsComponent implements OnInit {
  constructor(
    private RequestApiService: RequestApiService,
    private NgbModal: NgbModal
  ) {}
  requests: MyRequestModel[] = [];

  ngOnInit(): void {
    this.RequestApiService.getAllMyRequests().subscribe((res) => (this.requests = res));
    //TODO API call
    // this.requests = [
    //   {
    //     id: 'sjfs8sl4-nad0-4d3a-8b3a-2f8f8f8f8f8f',
    //     square: 95,
    //     address: 'Kharkiv city, Kozacka alley 67/2',
    //     services: [
    //       {
    //         id: 'al49sdfj-4d3a-8b3a-2f8f8f8f8f8f',
    //         name: 'Vacuum',
    //       },
    //       {
    //         id: 'baefl4sl-4d3a-8b3a-2f8f8f8f8f8f',
    //         name: 'Chemo',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'sjfs8sl4-nad0-4d3a-8b3a-2asdasdasdasd',
    //     square: 95,
    //     address: 'Kharkiv city, Kozacka alley 67/2',
    //     services: [
    //       {
    //         id: 'baefl4sl-4d3a-8b3a-2f8f8f8f8f8f',
    //         name: 'Chemo',
    //       },
    //     ],
    //   },
    // ];
  }

  status(value: number) {
    return RequestStatus[value];
  }

  onEditRequest(requestId: string) {
    var modal = this.NgbModal.open(RequestEditModalComponent, {
      size: 'xl',
      centered: true,
    });

    modal.componentInstance.requestId = requestId;
  }
}
