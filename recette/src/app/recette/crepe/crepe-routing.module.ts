import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrepePage } from './crepe.page';

const routes: Routes = [
  {
    path: '',
    component: CrepePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrepePageRoutingModule {}
