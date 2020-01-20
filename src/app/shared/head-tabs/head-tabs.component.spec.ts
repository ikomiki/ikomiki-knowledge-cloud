import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTabsComponent } from './head-tabs.component';

describe('HeadTabsComponent', () => {
  let component: HeadTabsComponent;
  let fixture: ComponentFixture<HeadTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
