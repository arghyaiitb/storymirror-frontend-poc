import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppComponent } from './home-app.component';

describe('HomeAppComponent', () => {
  let component: HomeAppComponent;
  let fixture: ComponentFixture<HomeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
