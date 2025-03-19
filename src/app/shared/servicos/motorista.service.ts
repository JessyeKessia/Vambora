import {Observable} from "rxjs";
import {Motorista} from "../modelo/motorista";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export abstract class MotoristaService {

  abstract listarMotorista(): Observable<Motorista[]>;
  
  abstract cadastrarMotorista(passageiro: Motorista): Observable<Motorista> 
  
  abstract removerMotorista(id: string): Observable<any>;
  
  abstract pesquisarPorIdMotorista(idEdicao: string): Observable<Motorista>;
  
  abstract atualizarMotorista(passageiro: Motorista): Observable<any>;

  abstract logarMotorista(email: string, senha: string): Observable<Motorista | null>;
}
