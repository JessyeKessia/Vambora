import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Motorista } from "../modelo/motorista";
import { from, Observable, map, switchMap } from "rxjs";
import { MotoristaService } from './motorista.service';

@Injectable({
  providedIn: 'root'
})
export class MotoristaFireService implements MotoristaService {
  private injector = inject(Injector);
  private colecaoMotorista: AngularFirestoreCollection<Motorista>;
  NOME_COLECAO = 'motorista';

  constructor(private firestore: AngularFirestore) {
    this.colecaoMotorista = this.firestore.collection(this.NOME_COLECAO);
  }

  listarMotorista(): Observable<Motorista[]> {
    return this.colecaoMotorista.valueChanges({ idField: 'id' });
  }

  cadastrarMotorista(motorista: Motorista): Observable<Motorista> {
    delete motorista.id;
    return from(this.colecaoMotorista.add({ ...motorista })).pipe(
      switchMap((docRef) => docRef.get()),
      map(doc => ({ id: doc.id, ...doc.data() } as Motorista))
    );
  }

  removerMotorista(id: string): Observable<any> {
    return from(this.colecaoMotorista.doc(id).delete());
  }

  pesquisarPorIdMotorista(idEdicao: string): Observable<Motorista> {
    return this.colecaoMotorista.doc(idEdicao).get().pipe(
      map(document => {
        const dados = document.data();
        return new Motorista(
          idEdicao,
          dados?.nome || '',
          dados?.sobrenome || '',
          dados?.telefone || '',
          dados?.email || '',
          dados?.senha || '',
          dados?.cnh || '',
          dados?.placa || '',
          dados?.modelo || ''
        );
      })
    );
  }

  atualizarMotorista(motorista: Motorista): Observable<void> {
    return from(this.colecaoMotorista.doc(motorista.id).update({ ...motorista }));
  }

  logarMotorista(email: string, senha: string): Observable<Motorista | null> {
    return runInInjectionContext(this.injector, () => {
      return this.firestore.collection(this.NOME_COLECAO, ref =>
        ref.where('email', '==', email).where('senha', '==', senha)
      ).get().pipe(
        map(snapshot => {
          if (snapshot.empty) {
            return null;
          }
          const data = snapshot.docs[0].data() as { nome: string, sobrenome: string, telefone: string, email: string, senha: string, cnh: string, placa: string, modelo: string };
          const motorista: Motorista = new Motorista(
            snapshot.docs[0].id,
            data.nome,
            data.sobrenome,
            data.telefone,
            data.email,
            data.senha,
            data.cnh,
            data.placa,
            data.modelo
          );
          return motorista;
        })
      );
    });
  }
}