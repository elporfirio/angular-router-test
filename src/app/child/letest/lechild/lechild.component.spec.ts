import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LechildComponent } from './lechild.component';

describe('LechildComponent', () => {
  let component: LechildComponent;
  let fixture: ComponentFixture<LechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
