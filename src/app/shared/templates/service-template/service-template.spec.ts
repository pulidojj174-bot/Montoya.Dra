import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTemplate } from './service-template';

describe('ServiceTemplate', () => {
  let component: ServiceTemplate;
  let fixture: ComponentFixture<ServiceTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
