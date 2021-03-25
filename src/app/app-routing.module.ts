import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { Page404Component } from './page404/page404.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/add-todo',
    pathMatch: 'full'
  },{
    path: 'add-todo',
    component: AddTodoComponent
  },{
    path: 'update-todo',
    component: UpdateTodoComponent
  },{
    path: 'add-produit',
    component: AddproduitComponent
  },{
    path: 'list-produit',
    component: ListproduitComponent
  },{
    path: 'update-produit/:id',
    component: UpdateproduitComponent
  },{
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
