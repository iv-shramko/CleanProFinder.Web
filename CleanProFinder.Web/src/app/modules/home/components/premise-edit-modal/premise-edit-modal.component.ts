import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-premise-edit-modal',
  templateUrl: './premise-edit-modal.component.html',
  styleUrls: ['./premise-edit-modal.component.scss'],
})
export class PremiseEditModalComponent implements OnInit {
  constructor(private modal: NgbActiveModal) {}

  ngOnInit(): void {}

  onClose() {
    this.modal.close();
  }

  onSave() {
    this.modal.close();
  }
}
