// dynamic-mermaid.ts
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import mermaid from 'mermaid';
import { MermaidControls } from '../mermaid-controls/mermaid-controls';
import { MermaidEditModal } from '../mermaid-edit-modal/mermaid-edit-modal';

export interface MermaidNode {
  id: string;
  name: string;
  position: number;
}

@Component({
  selector: 'app-dynamic-mermaid',
  standalone: true,
  imports: [MermaidControls, MermaidEditModal],
  template: `
    <div class="bg-slate-800 p-4 rounded-lg border border-slate-700">
      <!-- Edit Modal -->
      <app-mermaid-edit-modal
        [editingNode]="editingNode"
        [editText]="editText"
        (save)="saveNodeEdit($event)"
        (cancel)="cancelEdit()"
      />

      <!-- Controls -->
      <app-mermaid-controls
        [nodes]="nodes"
        [connections]="connections"
        (addNode)="addNamedNode($event)"
        (addConnection)="addManualConnection($event)"
        (removeNode)="removeNodeById($event)"
        (removeConnection)="removeConnection($event)"
        (randomConnection)="addConnection()"
        (clearAll)="clearAll()"
      />

      <!-- Diagram -->
      <div #mermaidElement class="mermaid-container cursor-pointer"></div>
    </div>
  `,
})
export class DynamicMermaid implements OnInit, AfterViewInit {
  @ViewChild('mermaidElement', { static: true }) mermaidElement!: ElementRef;

  nodes: MermaidNode[] = [
    { id: 'A', name: 'Start', position: 0 },
    { id: 'B', name: 'Process', position: 1 },
    { id: 'C', name: 'End', position: 2 },
  ];
  connections: string[] = ['A --> B', 'B --> C'];
  private nodeCounter = 4;

  editingNode: MermaidNode | null = null;
  editText: string = '';

  ngOnInit() {
    console.log('🚀 DynamicMermaid ngOnInit - Initializing mermaid...');
    mermaid.initialize({
      theme: 'dark',
      darkMode: true,
      fontFamily: 'Inter, system-ui, sans-serif',
    });
    console.log('✅ Mermaid initialized');
  }

  ngAfterViewInit() {
    console.log('🎯 ngAfterViewInit - Rendering initial diagram...');
    this.renderDiagram();
  }

  startEdit(nodeId: string) {
    console.log('✏️ startEdit called with nodeId:', nodeId);
    console.log('📋 Current nodes array:', this.nodes);

    const node = this.nodes.find((n) => n.id === nodeId);
    console.log('🔍 Found node:', node);

    if (node) {
      console.log('✅ Setting editing node:', node.name);
      this.editingNode = node;
      this.editText = node.name;
      console.log('📝 Edit text set to:', this.editText);
      console.log('🎭 Modal should now be visible');
    } else {
      console.log('❌ Node not found in nodes array');
      console.log(
        '🔍 Available node IDs:',
        this.nodes.map((n) => n.id)
      );
    }
  }

  saveNodeEdit(newName: string) {
    console.log('💾 saveNodeEdit called with newName:', newName);
    console.log('📝 Current editing node:', this.editingNode);

    if (this.editingNode && newName.trim()) {
      console.log(
        '✅ Saving node edit - Old name:',
        this.editingNode.name,
        'New name:',
        newName.trim()
      );
      this.editingNode.name = newName.trim();
      console.log('🔄 Re-rendering diagram...');
      this.renderDiagram();
    } else {
      console.log('❌ Cannot save - missing editing node or empty name');
    }
    this.cancelEdit();
  }

  cancelEdit() {
    console.log('❌ cancelEdit called');
    console.log('🧹 Clearing editing state...');
    this.editingNode = null;
    this.editText = '';
    console.log('✅ Edit state cleared');
  }

  // ... other methods remain the same until renderDiagram ...

  addNamedNode(event: { name: string; position: string | number }) {
    if (!event.name.trim()) return;

    const nodeId = String.fromCharCode(64 + this.nodeCounter);
    const newNode: MermaidNode = {
      id: nodeId,
      name: event.name.trim(),
      position: 0,
    };

    if (event.position === 'start') {
      this.nodes.unshift(newNode);
    } else if (event.position === 'end') {
      this.nodes.push(newNode);
    } else {
      const insertIndex = Number(event.position) + 1;
      this.nodes.splice(insertIndex, 0, newNode);
    }

    this.updatePositions();
    this.autoConnect(nodeId);
    this.nodeCounter++;
    this.renderDiagram();
  }

  addManualConnection(event: { fromId: string; toId: string }) {
    if (!event.fromId || !event.toId || event.fromId === event.toId) return;

    const newConnection = `${event.fromId} --> ${event.toId}`;
    if (!this.connections.includes(newConnection)) {
      this.connections.push(newConnection);
      this.renderDiagram();
    }
  }

  removeConnection(connection: string) {
    this.connections = this.connections.filter((conn) => conn !== connection);
    this.renderDiagram();
  }

  removeNodeById(nodeId: string) {
    this.nodes = this.nodes.filter((node) => node.id !== nodeId);
    this.connections = this.connections.filter(
      (conn) => !conn.includes(nodeId)
    );
    this.updatePositions();
    this.renderDiagram();
  }

  addConnection() {
    if (this.nodes.length >= 2) {
      const fromNode =
        this.nodes[Math.floor(Math.random() * this.nodes.length)];
      const toNode = this.nodes[Math.floor(Math.random() * this.nodes.length)];
      if (fromNode.id !== toNode.id) {
        const newConnection = `${fromNode.id} --> ${toNode.id}`;
        if (!this.connections.includes(newConnection)) {
          this.connections.push(newConnection);
          this.renderDiagram();
        }
      }
    }
  }

  clearAll() {
    this.nodes = [{ id: 'A', name: 'Start', position: 0 }];
    this.connections = [];
    this.nodeCounter = 2;
    this.renderDiagram();
  }

  private updatePositions() {
    this.nodes.forEach((node, index) => {
      node.position = index;
    });
  }

  private autoConnect(nodeId: string) {
    const nodeIndex = this.nodes.findIndex((n) => n.id === nodeId);
    if (nodeIndex > 0) {
      const prevNode = this.nodes[nodeIndex - 1];
      const connection = `${prevNode.id} --> ${nodeId}`;
      if (!this.connections.includes(connection)) {
        this.connections.push(connection);
      }
    }
    if (nodeIndex < this.nodes.length - 1) {
      const nextNode = this.nodes[nodeIndex + 1];
      const connection = `${nodeId} --> ${nextNode.id}`;
      if (!this.connections.includes(connection)) {
        this.connections.push(connection);
      }
    }
  }

  private generateDiagram(): string {
    const nodeDefinitions = this.nodes
      .map((node) => `${node.id}[${node.name}]`)
      .join('\n        ');
    const diagram = `flowchart TD\n        ${nodeDefinitions}\n        ${this.connections.join(
      '\n        '
    )}`;
    console.log('📊 Generated diagram:', diagram);
    return diagram;
  }

  private async renderDiagram() {
    console.log('🎨 renderDiagram called');
    try {
      const element = this.mermaidElement.nativeElement;
      console.log('📍 Mermaid element:', element);

      element.innerHTML = '';
      const diagramText = this.generateDiagram();
      const elementId = `mermaid-${Date.now()}`;

      console.log('🔄 Rendering mermaid with ID:', elementId);
      const { svg } = await mermaid.render(elementId, diagramText);
      element.innerHTML = svg;
      console.log('✅ Mermaid rendered successfully');

      console.log('🖱️ Adding click handlers...');
      this.addNodeClickHandlers();
    } catch (error) {
      console.error('❌ Mermaid rendering error:', error);
    }
  }

  private addNodeClickHandlers() {
    console.log('🔍 addNodeClickHandlers called');

    setTimeout(() => {
      console.log('⏰ Timeout executed - looking for SVG...');
      const svgElement = this.mermaidElement.nativeElement.querySelector('svg');
      console.log('📊 SVG Element found:', !!svgElement);

      if (svgElement) {
        // Try multiple approaches to find nodes

        // Approach 1: Look for .node class
        let nodeElements = svgElement.querySelectorAll('.node');
        console.log('🎯 Found .node elements:', nodeElements.length);

        // Approach 2: Look for flowchart nodes
        if (nodeElements.length === 0) {
          nodeElements = svgElement.querySelectorAll('[id*="flowchart-"]');
          console.log('🎯 Found flowchart- elements:', nodeElements.length);
        }

        // Approach 3: Look for rectangles (common node shape)
        if (nodeElements.length === 0) {
          nodeElements = svgElement.querySelectorAll('rect');
          console.log('🎯 Found rect elements:', nodeElements.length);
        }

        // Approach 4: Look for any clickable elements with text
        if (nodeElements.length === 0) {
          nodeElements = svgElement.querySelectorAll('g');
          console.log('🎯 Found g elements:', nodeElements.length);
        }

        // Log all elements for debugging
        console.log('🔍 All SVG elements:');
        const allElements = svgElement.querySelectorAll('*');
        allElements.forEach((el: any, index: any) => {
          if (el.id || el.classList.length > 0) {
            console.log(`  Element ${index}:`, {
              tag: el.tagName,
              id: el.id,
              classes: Array.from(el.classList),
              textContent: el.textContent?.trim(),
            });
          }
        });

        // Try to attach handlers
        nodeElements.forEach((nodeElement: any, index: any) => {
          console.log(`\n🎯 Processing element ${index}:`, {
            tag: nodeElement.tagName,
            id: nodeElement.id,
            classes: Array.from(nodeElement.classList),
            textContent: nodeElement.textContent?.trim(),
          });

          // Try to extract node ID from various sources
          let nodeId = this.extractNodeId(nodeElement);
          console.log('🆔 Extracted node ID:', nodeId);

          if (nodeId) {
            // Check if this node exists in our array
            const nodeExists = this.nodes.find((n) => n.id === nodeId);
            console.log(
              '✅ Node exists in array:',
              !!nodeExists,
              nodeExists?.name
            );

            if (nodeExists) {
              nodeElement.style.cursor = 'pointer';
              nodeElement.style.userSelect = 'none';
              console.log('👆 Set cursor to pointer for node:', nodeId);

              // Remove existing listeners to avoid duplicates
              nodeElement.onclick = null;

              nodeElement.addEventListener('click', (event: Event) => {
                console.log('🖱️ CLICK EVENT FIRED! Node ID:', nodeId);
                event.stopPropagation();
                event.preventDefault();
                this.startEdit(nodeId);
              });

              // Add visual feedback
              nodeElement.addEventListener('mouseenter', () => {
                nodeElement.style.opacity = '0.8';
                nodeElement.style.transform = 'scale(1.02)';
                nodeElement.style.transition = 'all 0.2s ease';
              });

              nodeElement.addEventListener('mouseleave', () => {
                nodeElement.style.opacity = '1';
                nodeElement.style.transform = 'scale(1)';
              });

              console.log('✅ Click handler added for node:', nodeId);
            }
          } else {
            console.log('❌ Could not extract node ID from element');
          }
        });
      } else {
        console.log('❌ No SVG element found');
      }
    }, 200); // Increased timeout
  }

  private extractNodeId(element: any): string | null {
    // Method 1: From element ID (this is the main one that needs fixing)
    if (element.id && element.id.includes('flowchart-')) {
      // Parse flowchart-A-0 -> A, flowchart-B-1 -> B, etc.
      const parts = element.id.split('-');
      if (parts.length >= 2) {
        return parts[1]; // Get the letter part (A, B, C)
      }
    }

    // Method 2: From flowchart class (backup)
    const classList = Array.from(element.classList) as string[];
    const flowchartClass = classList.find((cls: string) =>
      cls.startsWith('flowchart-')
    );
    if (flowchartClass) {
      const parts = flowchartClass.split('-');
      if (parts.length >= 2) {
        return parts[1];
      }
    }

    // Method 3: From text content (match our node names)
    const textContent = element.textContent?.trim();
    if (textContent) {
      const matchingNode = this.nodes.find((n) => n.name === textContent);
      if (matchingNode) {
        return matchingNode.id;
      }
    }

    return null;
  }
}
