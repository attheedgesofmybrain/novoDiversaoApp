import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WestworldPage } from './westworld.page';

describe('WestworldPage', () => {
  let component: WestworldPage;
  let fixture: ComponentFixture<WestworldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestworldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WestworldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
