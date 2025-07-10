import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard],
  template: `<div class="container">
      <app-dashboard />
    </div>
    <router-outlet /> `,
  styles: [],
})
export class App {}
