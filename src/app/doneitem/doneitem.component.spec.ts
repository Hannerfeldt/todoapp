import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneitemComponent } from './doneitem.component';

describe('DoneitemComponent', () => {
  let component: DoneitemComponent;
  let fixture: ComponentFixture<DoneitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
