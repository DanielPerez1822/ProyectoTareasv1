import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';//Definicion de rutas

bootstrapApplication(AppComponent,{
  ...appConfig,
  providers:[
    provideRouter(routes),//Proveedor de enrutamiento
  ]
}).catch((err)=> console.error(err));