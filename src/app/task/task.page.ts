import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  id: any;
  tanggal: any;
  judul: any;
  isi: any;
  data: any[];
  jml_data: any;

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private router: Router
  ) {
    this.data = [];
    this.getDataTask();
  }

  ngOnInit() {}

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.getDataTask();
    this.jml_data = this.data.length;
  }

  getDataTask() {
    this._apiService.getDataTask().subscribe(
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

  lihat() {
    this.router.navigateByUrl('/task-lihat-semua');
  }
  pindahlagi() {
    this.router.navigateByUrl('/task-lihat-log');
  }
}
