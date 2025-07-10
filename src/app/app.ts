import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { MermaidDiagram } from './mermaid-diagram/mermaid-diagram';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard],
  template: `<div class="container">
      <h1>Welcome</h1>
      <app-dashboard />
    </div>
    <router-outlet /> `,
  styles: [],
})
export class App {}
