import { Injectable, NgZone } from '@angular/core';

import * as firbase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userData: User; // Save logged in user data

  private _isLoggedIn: Subject<boolean> = new Subject();

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this._userData = user;
        localStorage.setItem('user', JSON.stringify(this._userData));
        JSON.parse(localStorage.getItem('user'));
        this._isLoggedIn.next(true);
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
        this._isLoggedIn.next(false);
      }
    });
  }

  public isUserLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Sign in with Google
  public GoogleAuth(): Promise<void> {
    return this.AuthLogin(new firbase.default.auth.GoogleAuthProvider());
  }

  // Sign out
  public signOut(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }

  // Auth logic to run auth providers
  private AuthLogin(provider): Promise<void> {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {});
        this.SetUserData(result.user);
      })
      .finally(() => {
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        this.openSnackBar(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  private SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  private openSnackBar(message: string, action: string = 'Dismiss'): void {
    this._snackBar.open(message, action, {
      duration: 6000,
    });
  }
}
