import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-task-lihat-log',
  templateUrl: './task-lihat-log.page.html',
  styleUrls: ['./task-lihat-log.page.scss'],
})
export class TaskLihatLogPage implements OnInit {
  id: any;
  tanggal: any;
  judul: any;
  isi: any;
  data: any[];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.data = [];
    this.getDataTask();
  }
  ngOnInit() {}
  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.getDataTask();
  }
  getDataTask() {
    this._apiService.ambilDataTaskLog().subscribe(
      (res: any) => {
        console.log('sukses', res);
        this.data = res;
      },
      (error: any) => {
        console.log('gagal', error);
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal memuat data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }
}
