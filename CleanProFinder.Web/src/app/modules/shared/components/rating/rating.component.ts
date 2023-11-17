import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit, AfterViewInit {
  constructor() {}

  @Input() value!: number;
  @ViewChild('container') starsContainer!: ElementRef;

  ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.createRatingElements();
  }

  private createRatingElements() {
    for (let index = 0; index < Math.floor(this.value); index++) {
      const elem = document.createElement('img');
      elem.setAttribute('src', '../../../../assets/icons/rating-fill.svg');
      (this.starsContainer.nativeElement as HTMLDivElement).appendChild(elem);
    }

    for (let index = 5; index > Math.floor(this.value); index--) {
      const elem = document.createElement('img');
      elem.setAttribute('src', '../../../../assets/icons/rating-stroke.svg');
      (this.starsContainer.nativeElement as HTMLDivElement).appendChild(elem);
    }
  }
}
