import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from "@angular/fire/compat/firestore";
import { from, map, Observable, switchMap } from "rxjs";
import { Passageiro } from '../modelo/passageiro';
import { PassageiroService } from './passageiro.service'; 

@Injectable({
  providedIn: 'root'
})
export class PassageiroFireService implements PassageiroService {  

  private colecaoPassageiro: AngularFirestoreCollection<Passageiro>;
  NOME_COLECAO = 'passageiro';

  constructor(private firestore: AngularFirestore) {
    this.colecaoPassageiro = this.firestore.collection(this.NOME_COLECAO);
  }

  listarPassageiro(): Observable<Passageiro[]> {
    return this.colecaoPassageiro.valueChanges({ idField: 'id' });
  }

  cadastrarPassageiro(passageiro: Passageiro): Observable<Passageiro> {
    delete passageiro.id;
    return from(this.colecaoPassageiro.add({ ...passageiro })).pipe(
      switchMap((docRef: DocumentReference<Passageiro>) => docRef.get()),
      map(doc => ({ id: doc.id, ...doc.data() } as Passageiro))
    );
  }

  removerPassageiro(id: string): Observable<any> {
    return from(this.colecaoPassageiro.doc(id).delete());
  }

  pesquisarPorIdPassageiro(idEdicao: string): Observable<Passageiro> {
    return this.colecaoPassageiro.doc(idEdicao).get().pipe(
      map(document => {
        const dados = document.data();
        return new Passageiro(
          idEdicao,
          dados ? dados.nome : '',
          dados ? dados.sobrenome : '',
          dados ? dados.telefone : '',
          dados ? dados.email : '',
          dados ? dados.senha : '',
          dados ? dados.cpf : ''
        );
      })
    );
  }

  atualizarPassageiro(passageiro: Passageiro): Observable<void> {
    return from(this.colecaoPassageiro.doc(passageiro.id).update({ ...passageiro }));
  }

  logarPassageiro(email: string, senha: string): Observable<Passageiro | null> {
    return this.firestore.collection(this.NOME_COLECAO, ref =>
      ref.where('email', '==', email).where('senha', '==', senha)
    ).get().pipe(
      map(snapshot => {
        if (snapshot.empty) {
          return null;
        }
        const data = snapshot.docs[0].data() as { nome: string, sobrenome: string, telefone: string, email: string, senha: string, cpf: string };
        const passageiro: Passageiro = new Passageiro(
          snapshot.docs[0].id,
          data.nome,
          data.sobrenome,
          data.telefone,
          data.email,
          data.senha,
          data.cpf
        );
        return passageiro;
      })
    );
  }
}
