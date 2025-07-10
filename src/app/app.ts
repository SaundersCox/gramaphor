import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<div class="container">
      <h1>Welcome</h1>
    </div>
    <router-outlet /> `,
  styles: [],
})
export class App {}
