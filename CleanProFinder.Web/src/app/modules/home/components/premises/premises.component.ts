import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premises',
  templateUrl: './premises.component.html',
  styleUrls: ['./premises.component.scss'],
})
export class PremisesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  premises = ['1', '2', '3', '4,', '5'];
}
