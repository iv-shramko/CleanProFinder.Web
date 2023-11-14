import { DOCUMENT } from '@angular/common';
import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Renderer2,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private view!: ViewContainerRef;
  constructor(
    //private viewContainerRef: ViewContainerRef,
    @Inject('MODAL_CONTAINER') private modalContainer: ViewContainerRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setContainer(container: ViewContainerRef) {
    console.log(container);
    this.view = container;
    console.log(this.view);
  }

  open<C>(type: Type<C>) {
    this.view.createComponent(type);
  }
  close() {}
}
