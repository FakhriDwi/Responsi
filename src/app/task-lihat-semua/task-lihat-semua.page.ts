import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-task-lihat-semua',
  templateUrl: './task-lihat-semua.page.html',
  styleUrls: ['./task-lihat-semua.page.scss'],
})
export class TaskLihatSemuaPage implements OnInit {
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
  getDataTask() {
    this._apiService.getDataSemuaTask().subscribe(
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
  deleteDataTask(id: any) {
    this.alertController
      .create({
        header: 'perhatian',
        subHeader: 'Yakin menghapus data ini?',
        buttons: [
          {
            text: 'Batal',
            handler: (data: any) => {
              console.log('dibatalkan', data);
            },
          },
          {
            text: 'Yakin',
            handler: (data: any) => {
              //jika tekan yakin
              this._apiService.deleteDataTask(id).subscribe(
                (res: any) => {
                  console.log('sukses', res);
                  this.getDataTask();
                },
                (error: any) => {
                  console.log('error', error);
                  this.alertController
                    .create({
                      header: 'Notifikasi',
                      message: 'gagal memuat data',
                      buttons: ['OK'],
                    })
                    .then((res) => {
                      res.present();
                    });
                }
              );
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
