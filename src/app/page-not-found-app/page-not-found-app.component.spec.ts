import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundAppComponent } from './page-not-found-app.component';

describe('PageNotFoundAppComponent', () => {
  let component: PageNotFoundAppComponent;
  let fixture: ComponentFixture<PageNotFoundAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
