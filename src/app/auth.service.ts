import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : any;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { }
  getUserDetails() {
    this._firebaseAuth.authState.subscribe(
      (user) => {
         this.user = user;
         localStorage.setItem('user',JSON.stringify(this.user))
        if (this.isLoggedIn() === false) {
          this.router.navigate(['/auth'])
        } else {
          this.router.navigate(['/'])
        }
      }, (error) => {
          console.log(error)
      }
    );
  }
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
  // register(email: string, password: string) {
  //     this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
  //     .then(data => {
  //       console.log(data)
  //       this.sendEmailVerification();
  //     },error => {
  //       alert(error.message)
  //     })
  // }
  // sendEmailVerification() {
  //   this._firebaseAuth.auth.currentUser.sendEmailVerification()
  //   .then(data => {
  //     console.log(data)
  //   })
  // }
  logout(){
    this._firebaseAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }
  isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }
}
