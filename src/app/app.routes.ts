import { Route } from '@angular/router';
import { HelloWorld } from './features/hello-world/hello-world';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HelloWorld,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@enterprise-angular-nx-monorepo/products').then(
        (c) => c.Products,
      ),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('@enterprise-angular-nx-monorepo/orders').then((c) => c.Orders),
  },
];
