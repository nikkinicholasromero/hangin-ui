import {Routes} from '@angular/router';
import {SignInComponent} from './component/sign-in/sign-in.component';
import {HomeComponent} from './component/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-in', component: SignInComponent},
  // TODO: 404
];
