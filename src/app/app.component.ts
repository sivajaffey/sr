import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { async } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SR';
  header = JSON.parse(localStorage.getItem('user'));
  constructor(private auth: AuthService) { 
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
  gotoPage(page) {
    this.auth.gotoPage(page);
  }
}
