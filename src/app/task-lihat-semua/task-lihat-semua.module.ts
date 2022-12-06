import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskLihatSemuaPageRoutingModule } from './task-lihat-semua-routing.module';

import { TaskLihatSemuaPage } from './task-lihat-semua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskLihatSemuaPageRoutingModule
  ],
  declarations: [TaskLihatSemuaPage]
})
export class TaskLihatSemuaPageModule {}
