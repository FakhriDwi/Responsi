import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-task-lihat',
  templateUrl: './task-lihat.page.html',
  styleUrls: ['./task-lihat.page.scss'],
})
export class TaskLihatPage implements OnInit {
  id: any;
  tanggal: any;
  judul: any;
  isi: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.AmbilDataTask(this.id);
    });
  }

  ngOnInit() {}

  AmbilDataTask(id: any) {
    this._apiService.ambilDataTask(id).subscribe(
      (res: any) => {
        console.log('sukses', res);
        let data = res;
        this.id = data.id;
        this.tanggal = data.tanggal;
        this.judul = data.judul;
        this.isi = data.isi;
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

  AddDataTask() {
    let url = this._apiService.apiURL() + '/tambah_task_log.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        tanggal: this.tanggal,
        judul: this.judul,
        isi: this.isi,
      },
    }).then(
      (data) => {
        this.tanggal = '';
        this.judul = '';
        this.isi = '';
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Task Telah Selesai',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
        this.DeleteDataTask(this.id);
        this.router.navigateByUrl('/task');
      },
      (error) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal Input data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }
  DeleteDataTask(id: any) {
    this._apiService.deleteDataTask(id).subscribe(
      (res: any) => {
        console.log('sukses', res);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
}
