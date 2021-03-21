import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClastResultComponent } from './clast-result.component';

describe('ClastResultComponent', () => {
  let component: ClastResultComponent;
  let fixture: ComponentFixture<ClastResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClastResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClastResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
