import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MermaidControls } from './mermaid-controls';

describe('MermaidControls', () => {
  let component: MermaidControls;
  let fixture: ComponentFixture<MermaidControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MermaidControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MermaidControls);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
