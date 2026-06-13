import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTemplate } from './result-template';

describe('ResultTemplate', () => {
  let component: ResultTemplate;
  let fixture: ComponentFixture<ResultTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
