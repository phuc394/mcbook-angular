import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import("../app/pages/home/home").then((m => m.Home)),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import("./pages/detail/detail").then(m => m.Detail)
  },
  {
    path: 'cart',
    loadComponent: () => import("./pages/cart/cart").then(m => m.Cart)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
