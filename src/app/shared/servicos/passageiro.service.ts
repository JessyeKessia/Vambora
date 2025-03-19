import { Observable } from "rxjs";
import { Passageiro } from "../modelo/passageiro";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class PassageiroService {

  abstract listarPassageiro(): Observable<Passageiro[]>;

  abstract cadastrarPassageiro(passageiro: Passageiro): Observable<Passageiro>;

  abstract removerPassageiro(id: string): Observable<any>;

  abstract pesquisarPorIdPassageiro(idEdicao: string): Observable<Passageiro>;

  abstract atualizarPassageiro(passageiro: Passageiro): Observable<any>;

  abstract logarPassageiro(email: string, senha: string): Observable<Passageiro | null>;
}
