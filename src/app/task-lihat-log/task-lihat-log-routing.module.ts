import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskLihatLogPage } from './task-lihat-log.page';

const routes: Routes = [
  {
    path: '',
    component: TaskLihatLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskLihatLogPageRoutingModule {}
