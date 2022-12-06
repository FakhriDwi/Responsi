import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskLihatLogPageRoutingModule } from './task-lihat-log-routing.module';

import { TaskLihatLogPage } from './task-lihat-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskLihatLogPageRoutingModule
  ],
  declarations: [TaskLihatLogPage]
})
export class TaskLihatLogPageModule {}
