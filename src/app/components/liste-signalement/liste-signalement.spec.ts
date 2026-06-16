import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSignalement } from './liste-signalement';

describe('ListeSignalement', () => {
  let component: ListeSignalement;
  let fixture: ComponentFixture<ListeSignalement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeSignalement],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeSignalement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
