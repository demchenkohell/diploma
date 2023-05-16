import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowsPage } from 'src/app/pages/flows/flows.page';

const routes: Routes = [
  {
    path: '',
    component: FlowsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowsPageRoutingModule {}
