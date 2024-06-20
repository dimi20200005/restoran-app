import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ONamaPage } from './o-nama.page';

describe('ONamaPage', () => {
  let component: ONamaPage;
  let fixture: ComponentFixture<ONamaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ONamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
