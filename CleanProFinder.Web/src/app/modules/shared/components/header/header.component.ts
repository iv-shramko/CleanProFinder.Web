import { IdentityService } from './../../../auth/services/identity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private identityService: IdentityService) {}

  role: string = this.identityService.getRole();

  ngOnInit(): void {
    console.log(this.role);
  }
}
