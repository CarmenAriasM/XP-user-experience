import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesArticlesComponent } from './routes-articles.component';

describe('RoutesArticlesComponent', () => {
  let component: RoutesArticlesComponent;
  let fixture: ComponentFixture<RoutesArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
