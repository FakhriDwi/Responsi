import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-task-tambah',
  templateUrl: './task-tambah.page.html',
  styleUrls: ['./task-tambah.page.scss'],
})
export class TaskTambahPage implements OnInit {
  tanggal: any;
  judul: any;
  isi: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  AddDataTask() {
    let url = this._apiService.apiURL() + '/tambah_task.php';
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
            message: 'Berhasil Input data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
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
}
