import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
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
      const alert = await this.alerta.create({
        cssClass: 'my-custom-class',
        header: 'TOP-House',
        message: 'Se envio su link de reseteo al correo ingresado',
        buttons: ['OK']
        });
  
        await alert.present();
    
        const { role } = await alert.onDidDismiss();

      return this.afAuth.sendPasswordResetEmail(email);

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

  //Metodo login con Google
  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error', error);

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
  
  //Metodo Register
  async register(email: string, password: string): Promise<User> {
    try{
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      
      const alert = await this.alerta.create({
        cssClass: 'my-custom-class',
        header: 'TOP-House',
        message: 'Se registro el usuario de manera correcta.',
        buttons: ['OK']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();

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
  
  //Metodo para verificar el email
  async sendVerificationEmail(): Promise<void> {
    try{
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  //
  isEmailVerified(user: User):boolean {
    return user.emailVerified == true ? true : false;
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
