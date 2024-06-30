import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestoraniPage } from './restorani.page';

describe('RestoraniPage', () => {
  let component: RestoraniPage;
  let fixture: ComponentFixture<RestoraniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoraniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
