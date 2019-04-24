import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        // this.alertify.success('Konto zostało utworzone!');
      },
      error => {
        // this.alertify.error(error);
      },
      () => {
        this.router.navigate(['/auth/login']);
      }
    );
  }
}
