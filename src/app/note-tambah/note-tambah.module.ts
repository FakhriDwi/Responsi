import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteTambahPageRoutingModule } from './note-tambah-routing.module';

import { NoteTambahPage } from './note-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteTambahPageRoutingModule
  ],
  declarations: [NoteTambahPage]
})
export class NoteTambahPageModule {}
