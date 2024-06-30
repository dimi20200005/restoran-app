import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestoranInfoPage } from './restoran-info.page';

describe('RestoranInfoPage', () => {
  let component: RestoranInfoPage;
  let fixture: ComponentFixture<RestoranInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoranInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
