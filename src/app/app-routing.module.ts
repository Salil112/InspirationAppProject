import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inspiration',
    loadChildren: () => import('./pages/inspiration/inspiration.module').then( m => m.InspirationPageModule), canActivate: [AuthGuard] 
  },
  {
    path: 'inspiration/:id',
    loadChildren: () => import('./pages/inspiration/inspiration-details/inspiration-details.module').then( m => m.InspirationDetailsPageModule), canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
