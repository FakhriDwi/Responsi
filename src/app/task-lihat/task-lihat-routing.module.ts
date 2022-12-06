import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskLihatPage } from './task-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: TaskLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskLihatPageRoutingModule {}
