// mermaid-edit-modal.ts
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  OnChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MermaidNode } from '../dynamic-mermaid/dynamic-mermaid';

@Component({
  selector: 'app-mermaid-edit-modal',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (editingNode) {
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-slate-700 p-6 rounded-lg border border-slate-600 min-w-80">
        <h3 class="text-lg font-bold text-slate-100 mb-4">
          Edit Node: {{ editingNode.name }}
        </h3>
        <input
          [(ngModel)]="editText"
          (keyup.enter)="onSave()"
          (keyup.escape)="onCancel()"
          class="w-full p-2 bg-slate-600 text-slate-100 rounded border border-slate-500 focus:border-cyan-400 focus:outline-none"
          placeholder="Enter node name"
          #editInput
        />
        <div class="mt-4 space-x-2">
          <button
            (click)="onSave()"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded text-sm"
          >
            Save
          </button>
          <button
            (click)="onCancel()"
            class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    }
  `,
})
export class MermaidEditModal implements OnChanges {
  @Input() editingNode: MermaidNode | null = null;
  @Input() editText: string = '';

  @Output() save = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  @ViewChild('editInput') editInput!: ElementRef;

  ngOnChanges() {
    console.log('🎭 Modal ngOnChanges called');
    console.log('📝 editingNode:', this.editingNode);
    console.log('📝 editText:', this.editText);

    if (this.editingNode) {
      console.log('✅ Modal should be visible now');
      setTimeout(() => {
        console.log('🎯 Attempting to focus input...');
        if (this.editInput) {
          console.log('✅ Edit input found, focusing...');
          this.editInput.nativeElement.focus();
          this.editInput.nativeElement.select();
          console.log('✅ Input focused and selected');
        } else {
          console.log('❌ Edit input not found');
        }
      }, 100);
    } else {
      console.log('❌ No editing node - modal should be hidden');
    }
  }

  onSave() {
    console.log('💾 Modal onSave called');
    console.log('📝 Current editText:', this.editText);

    if (this.editText.trim()) {
      console.log('✅ Emitting save event with:', this.editText);
      this.save.emit(this.editText);
    } else {
      console.log('❌ Cannot save - empty text');
    }
  }

  onCancel() {
    console.log('❌ Modal onCancel called');
    this.cancel.emit();
  }
}
