import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portada',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'portada',
    loadChildren: () => import('./Pages/portada/portada.module').then( m => m.PortadaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./Pages/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'vig-home',
    loadChildren: () => import('./Pages/vig-home/vig-home.module').then( m => m.VigHomePageModule)
  },
  {
    path: 'con-cuotas',
    loadChildren: () => import('./Pages/con-cuotas/con-cuotas.module').then( m => m.ConCuotasPageModule)
  },
  {
    path: 'con-visitas',
    loadChildren: () => import('./Pages/con-visitas/con-visitas.module').then( m => m.ConVisitasPageModule)
  },
  {
    path: 'avisos',
    loadChildren: () => import('./Pages/avisos/avisos.module').then( m => m.AvisosPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./Pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./Pages/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'registros',
    loadChildren: () => import('./Pages/registros/registros.module').then( m => m.RegistrosPageModule)
  },
  {
    path: 'camaras',
    loadChildren: () => import('./Pages/camaras/camaras.module').then( m => m.CamarasPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./Pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'registrar-usuario',
    loadChildren: () => import('./Pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./Pages/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'reset-psw',
    loadChildren: () => import('./Pages/reset-psw/reset-psw.module').then( m => m.ResetPswPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
