import {Component} from '@angular/core';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-home',
  imports: [
    NavComponent
  ],
  template: `
    <app-nav></app-nav>
  `
})
export class HomeComponent {
}
