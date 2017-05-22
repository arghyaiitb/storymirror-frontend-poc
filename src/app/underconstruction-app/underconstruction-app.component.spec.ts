import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderconstructionAppComponent } from './underconstruction-app.component';

describe('UnderconstructionAppComponent', () => {
  let component: UnderconstructionAppComponent;
  let fixture: ComponentFixture<UnderconstructionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderconstructionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderconstructionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
