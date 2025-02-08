import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carona } from '../modelo/carona/carona';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL_CARONA = 'http://localhost:3000/caronas';

  constructor(private http: HttpClient) {}

  cadastrar(carona: Carona): Observable<Carona> {
    delete carona.id;
    return this.http.post<Carona>(this.URL_CARONA, carona);
  }

  listar(): Observable<Carona[]> {
    return this.http.get<Carona[]>(this.URL_CARONA);
  }

  remover(id: string): Observable<any> {
    return this.http.delete(`${this.URL_CARONA}/${id}`);
  }

  pesquisarPorId(idEdicao: string): Observable<Carona> {
    return this.http.get<Carona>(`${this.URL_CARONA}/${idEdicao}`);
  }

  atualizar(carona: Carona): Observable<Carona> {
    return this.http.put<Carona>(`${this.URL_CARONA}/${carona.id}`, carona);
  }

}
