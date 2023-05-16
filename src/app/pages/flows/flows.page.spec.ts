import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from 'src/app/pages/explore-container/explore-container.module';

import { FlowsPage } from 'src/app/pages/flows/flows.page';

describe('FlowsPage', () => {
  let component: FlowsPage;
  let fixture: ComponentFixture<FlowsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlowsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FlowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
