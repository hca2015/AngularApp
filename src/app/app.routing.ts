import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './pages/core/auth.guard';


export const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '',
    component: PagesComponent, children: [
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Home' } },
    ]
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  //preloadingStrategy: PreloadAllModules,  // <- uncomment this line for disable lazy load
  useHash: false
});
