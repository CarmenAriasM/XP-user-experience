import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardLunchComponent } from './reward-lunch.component';

describe('RewardLunchComponent', () => {
  let component: RewardLunchComponent;
  let fixture: ComponentFixture<RewardLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardLunchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
