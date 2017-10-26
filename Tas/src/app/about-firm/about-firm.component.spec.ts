import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFirmComponent } from './about-firm.component';

describe('AboutFirmComponent', () => {
  let component: AboutFirmComponent;
  let fixture: ComponentFixture<AboutFirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
