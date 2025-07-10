import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMermaid } from './dynamic-mermaid';

describe('DynamicMermaid', () => {
  let component: DynamicMermaid;
  let fixture: ComponentFixture<DynamicMermaid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicMermaid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicMermaid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
