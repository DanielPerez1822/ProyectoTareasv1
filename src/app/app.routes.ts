import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FoooterComponent } from './foooter/foooter.component';

export const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FoooterComponent },
];