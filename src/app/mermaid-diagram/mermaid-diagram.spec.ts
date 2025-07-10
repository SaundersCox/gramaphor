import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MermaidDiagram } from './mermaid-diagram';

describe('MermaidDiagram', () => {
  let component: MermaidDiagram;
  let fixture: ComponentFixture<MermaidDiagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MermaidDiagram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MermaidDiagram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
