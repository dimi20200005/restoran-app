import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HranaPage } from './hrana.page';

describe('HranaPage', () => {
  let component: HranaPage;
  let fixture: ComponentFixture<HranaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HranaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
