import {Component} from '@angular/core';
import {NavComponent} from './component/nav.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent],
  template: `
    <app-nav></app-nav>
  `,
})
export class AppComponent {
}
