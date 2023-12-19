import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ROLES } from 'src/app/modules/auth/constants/roles';
import { IdentityService } from 'src/app/modules/auth/services/identity.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerGuard implements CanActivate {
  constructor(private identityService: IdentityService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.identityService.getRole() === ROLES.CUSTOMER;
  }
}
