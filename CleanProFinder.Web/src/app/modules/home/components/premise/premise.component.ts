import { ModalService } from 'src/app/modules/core/services/modal.service';
import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PremiseEditModalComponent } from 'src/app/modules/home/components/premise-edit-modal/premise-edit-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-premise',
  templateUrl: './premise.component.html',
  styleUrls: ['./premise.component.scss'],
})
export class PremiseComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private ngbModal: NgbModal
  ) {}

  @Input() premise = {
    name: 'Premise 1',
    address: 'Kharkiv city, Kozacka alley 67/2',
    area: 95,
    rooms: 4,
    floor: 6,
    description:
      'Lorem ipsum dolor sit amet consectetur. Cursus arcu facilisis egestas habitasadasdsdasdasdnt.',
  };

  ngOnInit(): void {}

  handlePremiseEdit() {
    this.ngbModal.open(PremiseEditModalComponent, { size: 'xl', centered: true });
    // this.modalService.open(PremiseEditModalComponent);
    //this.viewContainerRef.createComponent(PremiseEditModalComponent);
  }
}
