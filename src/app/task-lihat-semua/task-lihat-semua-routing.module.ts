import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskLihatSemuaPage } from './task-lihat-semua.page';

const routes: Routes = [
  {
    path: '',
    component: TaskLihatSemuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskLihatSemuaPageRoutingModule {}
