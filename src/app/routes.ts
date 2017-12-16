import {LandingComponent} from './landing/landing.component';

export const routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingComponent
  },
];
