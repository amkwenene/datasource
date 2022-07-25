import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicJavaCodeComponent } from './basic-java-code.component';

describe('BasicJavaCodeComponent', () => {
  let component: BasicJavaCodeComponent;
  let fixture: ComponentFixture<BasicJavaCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicJavaCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicJavaCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
