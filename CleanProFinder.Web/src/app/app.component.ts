import { ModalService } from 'src/app/modules/core/services/modal.service';
import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';

export let MODAL_CONTAINER = {};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  modalContainer!: ViewContainerRef;
  title = 'CleanProFinder.Web';
  constructor(private modalService: ModalService) {}
  ngAfterViewInit(): void {
    this.modalService.setContainer(this.modalContainer);
  }
}
