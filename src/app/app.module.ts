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
import { MatMenuModule } from '@angular/material/menu';

import { FirestoreModule } from './firestore/firestore.module';
import { firebaseConfig } from '../../firebase.config';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { UsuarioService } from './shared/servicos/usuario.service';

import { PassageiroFireService } from './shared/servicos/passageiro-fire.service';
import { MotoristaFireService } from './shared/servicos/motorista-fire.service';
import { MatIconModule } from '@angular/material/icon';



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
    AngularFirestoreModule,
    MatMenuModule,
    MatIconModule,

  ],
  providers: [
    provideAnimationsAsync(),
    PassageiroFireService,
    MotoristaFireService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
