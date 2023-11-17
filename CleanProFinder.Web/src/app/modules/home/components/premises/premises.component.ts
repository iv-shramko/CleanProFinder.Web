import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PremiseEditModalComponent } from 'src/app/modules/home/components/premise-edit-modal/premise-edit-modal.component';

@Component({
  selector: 'app-premises',
  templateUrl: './premises.component.html',
  styleUrls: ['./premises.component.scss'],
})
export class PremisesComponent implements OnInit {
  constructor(private ngbModal: NgbModal) {}

  ngOnInit(): void {}
  premises = ['1', '2', '3', '4,', '5'];

  handleAddPremise() {
    this.ngbModal.open(PremiseEditModalComponent, { size: 'xl', centered: true });
  }
}
