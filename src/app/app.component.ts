import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cuotas', url: '/con-cuotas', icon: 'wallet' },
    { title: 'Visitas', url: '/con-visitas', icon: 'man' },
    { title: 'Avisos', url: '/avisos', icon: 'alert-circle' },
    { title: 'Notificaciones', url: '/notificaciones', icon: 'notifications' },
    { title: 'Usuarios', url: '/usuarios', icon: 'people' },
    { title: 'Registros', url: '/registros', icon: 'clipboard' },
    { title: 'Camaras', url: '/camaras', icon: 'videocam' }
  ];
  public labels = ['Logout'];
  constructor(public router: Router, private menu: MenuController) {}

  cerrarMenu() {
    console.log("Sesion Cerrada");
    this.menu.close();
    this.menu.enable(false);
    this.router.navigate(['/portada']);
    
  }
}
