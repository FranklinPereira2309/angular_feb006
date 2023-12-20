import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})

export class NoticiaComponent {
  private apiUrl = 'http://servicodados.ibge.gov.br/api/v3/noticias';
  
  constructor(private http: HttpClient) {}
  
  pegarNoticias(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/?tipo=noticia&qtd=1`);

  }
}

