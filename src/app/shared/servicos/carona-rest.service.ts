import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carona, CaronaResponse } from '../modelo/carona';
import { environment } from '../../../enviroment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CaronaRestService {

  private URL_CARONA = environment.URL_CARONA;

  constructor(private http: HttpClient) {}

  cadastrar(carona: Carona): Observable<Carona> {
    delete carona.id;
    const { isEditing, motorista, dataSaida, enderecoChegada, enderecoPartida, textoObservacoes, ...data } = carona
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario') as string)
    const email = usuarioSalvo.email
    
    return this.http.post<Carona>(this.URL_CARONA, {
      ...data,
      motoristaNome: motorista,
      motoristaEmail: email,
      dataDeSaida: dataSaida,
      enderecoDePartida: enderecoChegada,
      enderecoDeChegada: enderecoPartida,
      observacoes: textoObservacoes,
      finalizada: false
    });
  }

  listar(): Observable<CaronaResponse[]> {
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario') as string)
    const email = usuarioSalvo.email
    const params = new HttpParams().set('motoristaEmail', email)

    return this.http.get<CaronaResponse[]>(this.URL_CARONA, { params });
  }

  remover(id: string): Observable<any> {
    return this.http.delete(`${this.URL_CARONA}/${id}`);
  }

  pesquisarPorId(idEdicao: string): Observable<Carona> {
    return this.http.get<Carona>(`${this.URL_CARONA}/${idEdicao}`);
  }

  atualizar(carona: Carona): Observable<Carona> {
    const { isEditing, motorista, dataSaida, enderecoChegada, enderecoPartida, textoObservacoes, ...data } = carona
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario') as string)
    const email = usuarioSalvo.email
    
    return this.http.put<Carona>(`${this.URL_CARONA}/${carona.id}`, {
      ...data,
      motoristaNome: motorista,
      motoristaEmail: email,
      dataDeSaida: dataSaida,
      enderecoDePartida: enderecoChegada,
      enderecoDeChegada: enderecoPartida,
      observacoes: textoObservacoes,
      finalizada: false
    });
  }
}
