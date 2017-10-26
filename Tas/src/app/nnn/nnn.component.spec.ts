import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NnnComponent } from './nnn.component';

describe('NnnComponent', () => {
  let component: NnnComponent;
  let fixture: ComponentFixture<NnnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NnnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
