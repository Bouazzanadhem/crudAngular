import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page404Component } from './page404/page404.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { FilterPipe } from './filter.pipe';
import { FlousPipe } from './flous.pipe';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddTodoComponent,
    ListTodoComponent,
    UpdateTodoComponent,
    Page404Component,
    AddproduitComponent,
    ListproduitComponent,
    UpdateproduitComponent,
    FilterPipe,
    FlousPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
