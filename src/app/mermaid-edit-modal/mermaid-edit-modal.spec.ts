import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MermaidEditModal } from './mermaid-edit-modal';

describe('MermaidEditModal', () => {
  let component: MermaidEditModal;
  let fixture: ComponentFixture<MermaidEditModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MermaidEditModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MermaidEditModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
