import { Component, OnInit } from '@angular/core';
// import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    // private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        // this.alertify.success('Zalogowano pomyślnie');
      },
      error => {
        // this.alertify.error(error);
      }, () => {
        this.router.navigate(['/centre']);
      }
    );
  }
}

