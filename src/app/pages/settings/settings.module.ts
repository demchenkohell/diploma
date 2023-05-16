import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from 'src/app/pages/explore-container/explore-container.module';

import { SettingsPageRoutingModule } from 'src/app/pages/settings/settings-routing.module';
import { SettingsPage } from 'src/app/pages/settings/settings.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SettingsPageRoutingModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
