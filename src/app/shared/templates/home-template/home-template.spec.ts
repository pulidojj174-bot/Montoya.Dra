import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTemplate } from './home-template';

describe('HomeTemplate', () => {
  let component: HomeTemplate;
  let fixture: ComponentFixture<HomeTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
