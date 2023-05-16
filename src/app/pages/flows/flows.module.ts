import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlowsPage } from 'src/app/pages/flows/flows.page';
import { ExploreContainerComponentModule } from 'src/app/pages/explore-container/explore-container.module';

import { FlowsPageRoutingModule } from 'src/app/pages/flows/flows-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FlowsPageRoutingModule
  ],
  declarations: [FlowsPage]
})
export class FlowsPageModule {}
