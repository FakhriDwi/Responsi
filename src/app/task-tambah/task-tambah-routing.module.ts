import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskTambahPage } from './task-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: TaskTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskTambahPageRoutingModule {}
