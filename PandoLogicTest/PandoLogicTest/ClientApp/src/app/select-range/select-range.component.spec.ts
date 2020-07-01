import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRangeComponent } from './select-range.component';

describe('SelectRangeComponent', () => {
  let component: SelectRangeComponent;
  let fixture: ComponentFixture<SelectRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
