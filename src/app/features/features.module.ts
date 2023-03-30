import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { FeauturesRoutingModule } from './features.routing';
import { NgxPaginationModule } from 'ngx-pagination';


import {GestionClientComponent} from './gestion-client/gestion-client.component'
import {GestionExpertComponent} from './gestion-expert/gestion-expert.component'
import {GestionManagerComponent} from './gestion-manager/gestion-manager.component'
import {GestionOffreComponent} from './gestion-offre/gestion-offre.component';
import {BoutonCreerOffreComponent} from './gestion-offre/bouton-creer-offre/bouton-creer-offre.component'
import {CreerOffreComponent} from './gestion-offre/creer-offre/creer-offre.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { ContentComponent } from './dashboard/content/content.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { ListDocComponent } from './dashboard/list-doc/list-doc.component';
import { TicketComponent } from './dashboard/ticket/ticket.component'
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionDocumentComponent } from './gestion-document/gestion-document.component';
import { GestionTicketComponent } from './gestion-ticket/gestion-ticket.component';
import { BarreRechercheComponent } from '../barre-recherche/barre-recherche.component';



@NgModule({
  declarations: [
    GestionClientComponent,
    GestionExpertComponent,
    GestionManagerComponent,
    GestionOffreComponent,
    BoutonCreerOffreComponent,
    CreerOffreComponent,
    CardsComponent,
    ContentComponent,
    HeaderComponent,
    ListDocComponent,
    TicketComponent,
    DashboardComponent,
    GestionDocumentComponent,
    GestionTicketComponent,
    BarreRechercheComponent
    
  ],       
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FeauturesRoutingModule),
    NgxPaginationModule 
    ]
})
export class FeaturesModule { }
