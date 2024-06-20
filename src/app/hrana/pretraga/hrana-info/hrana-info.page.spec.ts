import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HranaInfoPage } from './hrana-info.page';

describe('HranaInfoPage', () => {
  let component: HranaInfoPage;
  let fixture: ComponentFixture<HranaInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HranaInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
