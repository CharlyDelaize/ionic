import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrepePage } from './crepe.page';

describe('CrepePage', () => {
  let component: CrepePage;
  let fixture: ComponentFixture<CrepePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrepePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrepePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
