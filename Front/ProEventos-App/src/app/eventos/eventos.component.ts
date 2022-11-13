import { HttpClient } from '@angular/common/http'; //tem que ter pq é ele que pega info da API
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos', //seletor é o nome que chama no html app.component
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { //método chamado antes de inicializar o html
    this.getEventos();
  }

  public getEventos(): void {

    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );

  }


}
