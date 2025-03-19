import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VamBora';
  isLogin: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('URL Atual:', event.url); 
        this.isLogin = event.url.startsWith('/tela-login') || event.url === '/' || event.url.startsWith('/tela-cadastro');
        console.log('isLogin:', this.isLogin);
      }
    });
  }
}
