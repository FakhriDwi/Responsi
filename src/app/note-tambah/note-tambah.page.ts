import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-note-tambah',
  templateUrl: './note-tambah.page.html',
  styleUrls: ['./note-tambah.page.scss'],
})
export class NoteTambahPage implements OnInit {
  judul: any;
  tanggal: any;
  isi: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  AddDataNote() {
    let url = this._apiService.apiURL() + '/tambah_note.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        judul: this.judul,
        tanggal: this.tanggal,
        isi: this.isi,
      },
    }).then(
      (data) => {
        this.judul = '';
        this.tanggal = '';
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
        this.router.navigateByUrl('/note');
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
