import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  //link API
  apiURL() {
    return 'http://localhost/backenda';
  }

  getDataTask() {
    return this.http.get(this.apiURL() + '/tampil_task.php');
  }

  deleteDataTask(id: any) {
    return this.http.delete(this.apiURL() + '/hapus_task.php?id=' + id);
  }

  ambilDataTask(id: any) {
    return this.http.get(this.apiURL() + '/lihat_task.php?id=' + id);
  }

  getDataSemuaTask() {
    return this.http.get(this.apiURL() + '/tampilsemua_task.php');
  }

  ambilDataTaskLog() {
    return this.http.get(this.apiURL() + '/tampil_task_log.php');
  }
}
