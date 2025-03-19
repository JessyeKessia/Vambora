import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, senha: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, senha);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  getUsuarioLogado(): Observable<any> {
    return this.afAuth.authState;
  }
}
