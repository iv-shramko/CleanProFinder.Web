import { Injectable } from '@angular/core';
import { ROLES } from 'src/app/modules/auth/constants/roles';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  constructor() {}

  getRole() {
    //get role from token
    return ROLES.CUSTOMER;
  }
}
