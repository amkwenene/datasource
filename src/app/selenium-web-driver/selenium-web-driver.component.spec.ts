import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleniumWebDriverComponent } from './selenium-web-driver.component';

describe('SeleniumWebDriverComponent', () => {
  let component: SeleniumWebDriverComponent;
  let fixture: ComponentFixture<SeleniumWebDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleniumWebDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleniumWebDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
