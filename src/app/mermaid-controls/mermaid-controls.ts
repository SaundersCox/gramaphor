// mermaid-controls.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MermaidNode } from '../dynamic-mermaid/dynamic-mermaid';

@Component({
  selector: 'app-mermaid-controls',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="mb-4 space-y-3">
      <div class="text-sm text-slate-400 bg-slate-700 p-2 rounded">
        💡 <strong>Tip:</strong> Click any node in the diagram below to edit its
        name
      </div>

      <!-- Add Node Form -->
      <div class="flex space-x-2 items-end">
        <div class="flex-1">
          <label class="block text-sm text-slate-300 mb-1">Node Name</label>
          <input
            [(ngModel)]="newNodeName"
            placeholder="Enter node name"
            class="w-full p-2 bg-slate-700 text-slate-100 rounded border border-slate-600 text-sm"
          />
        </div>
        <div class="w-24">
          <label class="block text-sm text-slate-300 mb-1">Position</label>
          <select
            [(ngModel)]="insertPosition"
            class="w-full p-2 bg-slate-700 text-slate-100 rounded border border-slate-600 text-sm"
          >
            <option value="end">End</option>
            <option value="start">Start</option>
            @for (node of nodes; track node.id; let i = $index) {
            <option [value]="i">After {{ node.name }}</option>
            }
          </select>
        </div>
        <button
          (click)="onAddNode()"
          [disabled]="!newNodeName.trim()"
          class="bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 text-white px-4 py-2 rounded text-sm"
        >
          Add Node
        </button>
      </div>

      <!-- Add Connection Form -->
      <div class="flex space-x-2 items-end">
        <div class="flex-1">
          <label class="block text-sm text-slate-300 mb-1">From Node</label>
          <select
            [(ngModel)]="fromNodeId"
            class="w-full p-2 bg-slate-700 text-slate-100 rounded border border-slate-600 text-sm"
          >
            <option value="">Select source node</option>
            @for (node of nodes; track node.id) {
            <option [value]="node.id">{{ node.name }}</option>
            }
          </select>
        </div>
        <div class="flex-1">
          <label class="block text-sm text-slate-300 mb-1">To Node</label>
          <select
            [(ngModel)]="toNodeId"
            class="w-full p-2 bg-slate-700 text-slate-100 rounded border border-slate-600 text-sm"
          >
            <option value="">Select target node</option>
            @for (node of nodes; track node.id) {
            <option [value]="node.id">{{ node.name }}</option>
            }
          </select>
        </div>
        <button
          (click)="onAddConnection()"
          [disabled]="!fromNodeId || !toNodeId || fromNodeId === toNodeId"
          class="bg-green-600 hover:bg-green-700 disabled:bg-slate-600 text-white px-4 py-2 rounded text-sm"
        >
          Connect
        </button>
      </div>

      <!-- Quick Actions -->
      <div class="flex space-x-2">
        <button
          (click)="onRemoveLastNode()"
          class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
        >
          Remove Last
        </button>
        <button
          (click)="randomConnection.emit()"
          class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
        >
          Random Connection
        </button>
        <button
          (click)="clearAll.emit()"
          class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
        >
          Clear All
        </button>
      </div>

      <!-- Node List -->
      <div class="text-sm text-slate-300">
        <strong>Current Nodes:</strong>
        @for (node of nodes; track node.id; let i = $index) {
        <span class="inline-block bg-slate-700 px-2 py-1 rounded mr-2 mb-1">
          {{ i + 1 }}. {{ node.name }}
          <button
            (click)="removeNode.emit(node.id)"
            class="ml-2 text-red-400 hover:text-red-300"
          >
            ×
          </button>
        </span>
        }
      </div>

      <!-- Connection List -->
      @if (connections.length > 0) {
      <div class="text-sm text-slate-300">
        <strong>Current Connections:</strong>
        @for (connection of connections; track connection) {
        <span class="inline-block bg-slate-600 px-2 py-1 rounded mr-2 mb-1">
          {{ getConnectionDisplay(connection) }}
          <button
            (click)="removeConnection.emit(connection)"
            class="ml-2 text-red-400 hover:text-red-300"
          >
            ×
          </button>
        </span>
        }
      </div>
      }
    </div>
  `,
})
export class MermaidControls {
  @Input() nodes: MermaidNode[] = [];
  @Input() connections: string[] = [];

  @Output() addNode = new EventEmitter<{
    name: string;
    position: string | number;
  }>();
  @Output() addConnection = new EventEmitter<{
    fromId: string;
    toId: string;
  }>();
  @Output() removeNode = new EventEmitter<string>();
  @Output() removeConnection = new EventEmitter<string>();
  @Output() randomConnection = new EventEmitter<void>();
  @Output() clearAll = new EventEmitter<void>();

  newNodeName: string = '';
  insertPosition: string | number = 'end';
  fromNodeId: string = '';
  toNodeId: string = '';

  onAddNode() {
    if (this.newNodeName.trim()) {
      this.addNode.emit({
        name: this.newNodeName,
        position: this.insertPosition,
      });
      this.newNodeName = '';
    }
  }

  onAddConnection() {
    if (this.fromNodeId && this.toNodeId && this.fromNodeId !== this.toNodeId) {
      this.addConnection.emit({ fromId: this.fromNodeId, toId: this.toNodeId });
      this.fromNodeId = '';
      this.toNodeId = '';
    }
  }

  onRemoveLastNode() {
    if (this.nodes.length > 1) {
      const lastNode = this.nodes[this.nodes.length - 1];
      this.removeNode.emit(lastNode.id);
    }
  }

  getConnectionDisplay(connection: string): string {
    const [fromId, toId] = connection.split(' --> ');
    const fromNode = this.nodes.find((n) => n.id === fromId);
    const toNode = this.nodes.find((n) => n.id === toId);
    return `${fromNode?.name || fromId} → ${toNode?.name || toId}`;
  }
}
