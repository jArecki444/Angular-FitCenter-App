import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FitCenter-Angular';
  constructor(private authService: AuthService) {}
  loggedIn() {
    return this.authService.loggedIn();
  }
}
