import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CresultComponent } from './cresult.component';

describe('CresultComponent', () => {
  let component: CresultComponent;
  let fixture: ComponentFixture<CresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
