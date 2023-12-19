import { Injectable, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private view!: ViewContainerRef;
  constructor() {}

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
