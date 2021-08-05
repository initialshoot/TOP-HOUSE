import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-psw',
  templateUrl: './reset-psw.page.html',
  styleUrls: ['./reset-psw.page.scss'],
})
export class ResetPswPage implements OnInit {

  constructor(public menu: MenuController, private authSvc: AuthService, private router: Router) {

    this.menu.enable(false);
      
   }

  ngOnInit() {
  }

  async onResetPsw(email) {
    try {
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

}
