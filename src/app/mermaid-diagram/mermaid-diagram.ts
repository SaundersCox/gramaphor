import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-mermaid-diagram',
  imports: [],
  template: `
    <div
      #mermaidDiv
      class="mermaid-container bg-slate-800 p-4 rounded-lg border border-slate-700"
    >
      <div #mermaidElement></div>
    </div>
  `,
  styles: ` .mermaid-container {
      overflow-x: auto;
    }

    /* Dark theme for mermaid */
    :host ::ng-deep .mermaid svg {
      background-color: transparent !important;
    }
  `,
})
export class MermaidDiagram implements OnInit, AfterViewInit, OnChanges {
  @Input() diagram!: string;
  @Input() theme: 'dark' | 'default' | 'forest' | 'neutral' = 'dark';

  @ViewChild('mermaidElement', { static: true }) mermaidElement!: ElementRef;

  private elementId = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

  ngOnInit() {
    mermaid.initialize({
      theme: this.theme,
      darkMode: true,
      fontFamily: 'Inter, system-ui, sans-serif',
    });
  }

  ngAfterViewInit() {
    this.renderDiagram();
  }

  ngOnChanges() {
    if (this.mermaidElement) {
      this.renderDiagram();
    }
  }

  private async renderDiagram() {
    if (!this.diagram) return;

    try {
      const element = this.mermaidElement.nativeElement;
      element.innerHTML = '';

      const { svg } = await mermaid.render(this.elementId, this.diagram);
      element.innerHTML = svg;
    } catch (error) {
      console.error('Mermaid rendering error:', error);
      this.mermaidElement.nativeElement.innerHTML = `<div class="text-red-400 p-4">Error rendering diagram: ${error}</div>`;
    }
  }
}
