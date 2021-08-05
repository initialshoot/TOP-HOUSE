import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-psw',
  templateUrl: './reset-psw.page.html',
  styleUrls: ['./reset-psw.page.scss'],
})
export class ResetPswPage implements OnInit {

  constructor(public menu: MenuController, private authSvc: AuthService, private router: Router, public alerta: AlertController) {

    this.menu.enable(false);
      
   }

  ngOnInit() {
  }

  async onResetPsw(email) {
    try {
      await this.authSvc.resetPassword(email.value);

      const alert = await this.alerta.create({
        cssClass: 'my-custom-class',
        header: 'TOP-House',
        message: 'Se envio su link de reseteo al correo ingresado',
        buttons: ['OK']
        });
  
        await alert.present();
    
        const { role } = await alert.onDidDismiss();

      this.router.navigate(['/login']);
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

}
