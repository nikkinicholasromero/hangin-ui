import {Component, inject, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  template: `
    Sign in
  `
})
export class SignInComponent implements OnInit {
  authenticationService = inject(AuthenticationService);
  router = inject(Router);

  ngOnInit(): void {
    if (this.authenticationService.isAuthenticated) {
      this.router.navigate(['/']).then(r => {
      });
    }
  }
}
