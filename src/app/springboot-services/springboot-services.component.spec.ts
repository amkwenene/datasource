import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringbootServicesComponent } from './springboot-services.component';

describe('SpringbootServicesComponent', () => {
  let component: SpringbootServicesComponent;
  let fixture: ComponentFixture<SpringbootServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringbootServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringbootServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
