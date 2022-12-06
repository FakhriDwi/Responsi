import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskLihatPageRoutingModule } from './task-lihat-routing.module';

import { TaskLihatPage } from './task-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskLihatPageRoutingModule
  ],
  declarations: [TaskLihatPage]
})
export class TaskLihatPageModule {}
