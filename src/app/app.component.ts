import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cuotas', url: '/folder/cuotas', icon: 'wallet' },
    { title: 'Avisos', url: '/folder/avisos', icon: 'alert-circle' },
    { title: 'Notificaciones', url: '/folder/notificaciones', icon: 'notifications' },
    { title: 'Usuarios', url: '/folder/usuarios', icon: 'people' },
    { title: 'Registros', url: '/folder/registros', icon: 'clipboard' },
    { title: 'Camaras', url: '/folder/camaras', icon: 'videocam' },
    { title: 'Visitas', url: '/folder/visitas', icon: 'man' }
  ];
  public labels = ['Logout'];
  constructor() {}
}
