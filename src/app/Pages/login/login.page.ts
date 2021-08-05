import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menu: MenuController, private authSvc:AuthService, public ruta: Router) { 

    this.menu.enable(false);

  }

  ngOnInit() {}

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if(user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        console.log('Verified: ', isVerified);
        this.ruta.navigate(['/folder/:id']);
      }
    } catch(error) {
      console.log('Error: ', error);
    }
  }

  /* Inicio de sesion Opcional con uso de cuanta de Google
  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if(user) {
        //To do: Checkemail
        console.log('User: ', user);
      }
    } catch(error) {
      console.log('Error: ', error);
    }
  }
*/
}
