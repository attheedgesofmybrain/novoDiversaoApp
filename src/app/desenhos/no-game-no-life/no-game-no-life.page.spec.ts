import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoGameNoLifePage } from './no-game-no-life.page';

describe('NoGameNoLifePage', () => {
  let component: NoGameNoLifePage;
  let fixture: ComponentFixture<NoGameNoLifePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoGameNoLifePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoGameNoLifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
