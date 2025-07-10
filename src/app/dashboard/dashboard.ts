import { Component } from '@angular/core';
import { MermaidDiagram } from '../mermaid-diagram/mermaid-diagram';

@Component({
  selector: 'app-dashboard',
  imports: [MermaidDiagram],
  template: `
    <div class="container p-6">
      <h1 class="text-3xl font-bold text-slate-100 mb-6">Project Flow</h1>

      <!-- GitLab Workflow Diagram -->
      <app-mermaid-diagram [diagram]="gitlabWorkflow" theme="dark">
      </app-mermaid-diagram>

      <!-- Project Architecture -->
      <h2 class="text-2xl font-bold text-slate-100 mt-8 mb-4">Architecture</h2>
      <app-mermaid-diagram [diagram]="architectureDiagram" theme="dark">
      </app-mermaid-diagram>
    </div>
  `,
  styles: ``,
})
export class Dashboard {
  gitlabWorkflow = `
    gitGraph
      commit id: "Initial commit"
      branch develop
      checkout develop
      commit id: "Add feature"
      commit id: "Fix bug"
      checkout main
      merge develop
      commit id: "Release v1.0"
  `;

  architectureDiagram = `
    graph TD
      A[GitLab API] --> B[Angular Frontend]
      B --> C[Project Service]
      B --> D[Issue Service]
      C --> E[Project List]
      D --> F[Issue Tracker]
      E --> G[Project Details]
      F --> H[Issue Details]
  `;
}
