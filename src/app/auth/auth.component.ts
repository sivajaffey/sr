import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {
    // this.auth.getUserDetails()
  }
  ngOnInit() {
    // console.log(JSON.parse(localStorage.getItem('user')))
    // console.log(this.auth.isLoggedIn())
    if (this.auth.isLoggedIn() === true){
      // this.router.navigate(['/'])
    }
    
  }
  // register() {
  //   this.auth.register(this.email.value, this.password.value)
  // }
}
