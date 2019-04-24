import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showTrainingSubmenu = false;
  showDietSubmenu = false;
  isShowing = false;
  jwtHelper = new JwtHelperService();
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  logout() {
    localStorage.removeItem('token');

    this.router.navigate(['auth/login']);
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
