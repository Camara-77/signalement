import { Routes } from '@angular/router';
import { Formulaire } from './components/formulaire/formulaire';
import { ListeSignalement } from './components/liste-signalement/liste-signalement';
import { DetailSignalement } from './components/detail-signalement/detail-signalement';

export const routes: Routes = [
    {path: '', component: ListeSignalement},
    {path: 'signalement/creer', component: Formulaire},
    {path: 'signalement/detail/:id', component: DetailSignalement}
];
