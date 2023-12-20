import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrl: './tempo.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class TempoComponent {

  private apiKey = 'dcb9330c595ad9c592bbc318dedc757b';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  pegarDadosTempo(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
