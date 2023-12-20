import { Component, OnInit } from '@angular/core';
import { TempoComponent } from '../tempo/tempo.component';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})

export class ServicosComponent implements OnInit {

  temperatura!: number;
  humidade!: number;
  maxTemperatura!: number;
  minTemperatura!: number;
  cidade!:string;

  constructor(private tempoComponent: TempoComponent) {}

  ngOnInit(): void {
    this.mostrarOtempo();
  }

  async mostrarOtempo(): Promise<void> {
    try {
      const data: any = await this.tempoComponent.pegarDadosTempo(-14.796580070830135, -39.17338240445384).toPromise();
            
      this.temperatura = parseInt(data.main.temp);
      this.humidade = data.main.humidity;
      this.maxTemperatura = parseInt(data.main.temp_max);
      this.minTemperatura = parseInt(data.main.temp_min);
      this.cidade = data?.name;
    } catch (erro) {
      console.log("Erro na chamada da API: ", erro);
    }
  }
  

}
