import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { StartComponent } from './start/start.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: StartComponent },
  { path: 'perguntas', component: PerguntasComponent, data: { nav: 'Perguntas' }}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PerguntasComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
