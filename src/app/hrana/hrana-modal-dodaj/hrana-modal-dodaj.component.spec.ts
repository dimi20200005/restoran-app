import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HranaModalDodajComponent } from './hrana-modal-dodaj.component';

describe('HranaModalComponent', () => {
  let component: HranaModalDodajComponent;
  let fixture: ComponentFixture<HranaModalDodajComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HranaModalDodajComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HranaModalDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
