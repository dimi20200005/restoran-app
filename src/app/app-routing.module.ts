import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'hrana',
    loadChildren: () => import('./hrana/hrana.module').then( m => m.HranaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'hrana/:hranaId', // Dodajemo ':hranaId' kao deo putanje
    loadChildren: () => import('./hrana/hrana.module').then( m => m.HranaPageModule)
  },

  {
    path: '',
    redirectTo: 'hrana',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./auth/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'restorani',
    loadChildren: () => import('./restorani/restorani.module').then( m => m.RestoraniPageModule)
  },
  {
  path: 'restorani/:id',
  loadChildren: () => import('./restorani/restorani.module').then( m => m.RestoraniPageModule)  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
