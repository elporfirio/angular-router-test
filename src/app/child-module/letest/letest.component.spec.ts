import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetestComponent } from './letest.component';

describe('LetestComponent', () => {
  let component: LetestComponent;
  let fixture: ComponentFixture<LetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
