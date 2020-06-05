import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KakeguruiPage } from './kakegurui.page';

describe('KakeguruiPage', () => {
  let component: KakeguruiPage;
  let fixture: ComponentFixture<KakeguruiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakeguruiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KakeguruiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
