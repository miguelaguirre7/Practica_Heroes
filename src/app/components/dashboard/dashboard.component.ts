import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaHeroes: any[] = [];
  CuatroHeroes: any[] = [];
  constructor( private servicio: HeroesService) { 
    this.listaHeroes = this.servicio.getHeroes();
    this.generarListaCuatroHeroes();
  }
  

  ngOnInit(): void {
  }
generarListaCuatroHeroes(){
  for (let i = 0; i < 4; i++) {
    this.CuatroHeroes.push(this.listaHeroes[i])
  }
  console.log(this.CuatroHeroes);
}

}
