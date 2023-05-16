import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClasiAppService {

  constructor(private htpp: HttpClient) { }

  getarticulos(palabra: string) {
    return this.htpp.get(`https://www.hostcatedral.com/api/appNoti/public/buscar/${palabra}`);
  }
}
