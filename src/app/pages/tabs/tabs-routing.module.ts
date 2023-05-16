import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from 'src/app/pages/tabs/tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'search',
        loadChildren: () => import('src/app/pages/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'flows',
        loadChildren: () => import('src/app/pages/flows/flows.module').then(m => m.FlowsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('src/app/pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
