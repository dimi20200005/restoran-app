import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PretragaPage } from './pretraga.page';

describe('PretragaPage', () => {
  let component: PretragaPage;
  let fixture: ComponentFixture<PretragaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
