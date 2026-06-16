import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSignalement } from './detail-signalement';

describe('DetailSignalement', () => {
  let component: DetailSignalement;
  let fixture: ComponentFixture<DetailSignalement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailSignalement],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSignalement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
