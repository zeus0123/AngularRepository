import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagButtonComponent } from './imag-button.component';

describe('ImagButtonComponent', () => {
  let component: ImagButtonComponent;
  let fixture: ComponentFixture<ImagButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
