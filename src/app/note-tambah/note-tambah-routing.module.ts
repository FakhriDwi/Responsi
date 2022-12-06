import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteTambahPage } from './note-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: NoteTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteTambahPageRoutingModule {}
