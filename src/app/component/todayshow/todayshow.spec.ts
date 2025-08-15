import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todayshow } from './todayshow';

describe('Todayshow', () => {
  let component: Todayshow;
  let fixture: ComponentFixture<Todayshow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todayshow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todayshow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
