import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, Routes, RouterModule } from '@angular/router';
import { async } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project';
  header = JSON.parse(localStorage.getItem('user'));
  constructor(private auth: AuthService, private router: Router) { 
   this.auth.isLoggedIn() == true ? this.router.navigate(['/home']) : this.router.navigate(['/']);
  }
  ngOnInit() {
     this.header = JSON.parse(localStorage.getItem('user'));
  }
  login() {
    this.auth.signInWithGoogle()
    .then(data => {
      this.auth.getUserDetails();
      location.reload()
    },error => {
      alert(error.message);
    })
  }
  logout() {
    this.auth.logout();
    this.header = {};
  }
}
