import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
