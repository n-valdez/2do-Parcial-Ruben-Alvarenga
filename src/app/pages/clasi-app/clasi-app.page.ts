import { Component, OnInit } from '@angular/core';
import { ClasiAppService } from '../../service/clasi-app.service';
import { ClasiAppResponse } from '../interface/clasiApp';
import { NavigationExtras,Route,Router}from '@angular/router'

@Component({
  selector: 'app-clasi-app',
  templateUrl: './clasi-app.page.html',
  styleUrls: ['./clasi-app.page.scss'],
})
export class ClasiAppPage implements OnInit {
  contenidos: ClasiAppResponse[] = [];
  palabra: string = '';
  constructor(private router:Router,private serviceclasiapp: ClasiAppService) { }


  ngOnInit() {
  }

  buscar() {
    this.serviceclasiapp.getarticulos(this.palabra)
      .subscribe((resp) => {
        console.log(resp);
        this.contenidos = resp as ClasiAppResponse[];
      });
  }
  irAlContenido(contenido:ClasiAppResponse) {
    const extras: NavigationExtras = {
      queryParams: {
        data:JSON.stringify(contenido)
      }
    }
    this.router.navigate(['../info-clasi-app'],extras)
  }
}
