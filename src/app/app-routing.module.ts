import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portada',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
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
    path: 'con-home',
    loadChildren: () => import('./Pages/con-home/con-home.module').then( m => m.ConHomePageModule)
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
