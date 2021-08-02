import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { AlertController } from '@ionic/angular';

import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable, of } from 'rxjs';
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public user$: Observable <User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, public alerta: AlertController) 
  { 

    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    )

  }
    

//Metodo para resetear la contraseña
  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  //Metodo login con Google
  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error', error);
    }
   }
  
  //Metodo Register
  async register(email: string, password: string): Promise<User> {
    try{
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log('Error: ', error);
      const alert = await this.alerta.create({
        cssClass: 'my-custom-class',
        header: 'TOP-House',
        message: error.message,
        buttons: ['OK']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();

      
    }
  }
  
  //Metodo log-in
  async login(email: string, password: string): Promise<User> {
    try{
      const { user }= await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      return user;
    }catch (error) {
      console.log('Error: ', error );
    }
  }  
  
  //Metodo para verificar el email
  async sendVerificationEmail(): Promise<void> {
    try{
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error: ', error);
    }
  }
  
  // Metodo log-out
  async logout(): Promise<void> {
    try{
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Error: ', error );
    }
  }

//Metodo Actualizar datos del usuario

private updateUserData(user: User){
  const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
  const data:User = {
    uid:user.uid,
    email:user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName,
  };

  return userRef.set(data, {merge:true});
}
  
}