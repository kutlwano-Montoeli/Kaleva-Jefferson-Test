import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjTime } from './tj-time';

describe('TjTime', () => {
  let component: TjTime;
  let fixture: ComponentFixture<TjTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TjTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TjTime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
