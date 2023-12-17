import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { ROLES } from 'src/app/modules/auth/constants/roles';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  constructor() {}

  getRole() {
    const token = localStorage.getItem('authToken');

    if (token) {
      const tokenData: any = jwtDecode(token);
      console.log(tokenData);

      console.log(tokenData['role']);

      return tokenData['role'];
    }
    return ROLES.CUSTOMER;
  }
}
