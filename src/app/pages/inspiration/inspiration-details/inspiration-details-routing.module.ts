import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspirationDetailsPage } from './inspiration-details.page';

const routes: Routes = [
  {
    path: '',
    component: InspirationDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspirationDetailsPageRoutingModule {}
