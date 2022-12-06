import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskTambahPageRoutingModule } from './task-tambah-routing.module';

import { TaskTambahPage } from './task-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskTambahPageRoutingModule
  ],
  declarations: [TaskTambahPage]
})
export class TaskTambahPageModule {}
