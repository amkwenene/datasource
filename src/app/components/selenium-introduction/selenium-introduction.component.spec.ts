import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleniumIntroductionComponent } from './selenium-introduction.component';

describe('SeleniumIntroductionComponent', () => {
  let component: SeleniumIntroductionComponent;
  let fixture: ComponentFixture<SeleniumIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleniumIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleniumIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
