import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) {}

  login(): void {
    this.auth.loginWithRedirect({
      appState: { target: '/dashboard' }
    });
  }
}
