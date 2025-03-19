import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { CaronaModule } from './carona/carona.module';
import { MaterialModule } from './material/material.module';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { FirestoreModule } from './firestore/firestore.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth'; 
import { firebaseConfig } from '../../firebase.config';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { PassageiroFireService } from './shared/servicos/passageiro-fire.service';
import { MotoristaFireService } from './shared/servicos/motorista-fire.service';



@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaCadastroComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    CaronaModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    FirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({ projectId: "vambora-users", appId: "1:863307189559:web:6854559b671a6e3df85eb2", storageBucket: "vambora-users.firebasestorage.app", apiKey: "AIzaSyBM9ePfMO2u80AQkjEwHID70jFAzUVyPg0", authDomain: "vambora-users.firebaseapp.com", messagingSenderId: "863307189559", measurementId: "G-GJFDY1JRGG" })),
    provideAuth(() => getAuth()),
    PassageiroFireService, 
    MotoristaFireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
