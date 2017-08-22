import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlponchoComponent } from './alponcho.component';

describe('AlponchoComponent', () => {
  let component: AlponchoComponent;
  let fixture: ComponentFixture<AlponchoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlponchoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlponchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
