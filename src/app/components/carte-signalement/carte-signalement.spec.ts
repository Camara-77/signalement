import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteSignalement } from './carte-signalement';

describe('CarteSignalement', () => {
  let component: CarteSignalement;
  let fixture: ComponentFixture<CarteSignalement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteSignalement],
    }).compileComponents();

    fixture = TestBed.createComponent(CarteSignalement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
