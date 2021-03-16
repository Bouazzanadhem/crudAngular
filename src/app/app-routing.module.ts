import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { Page404Component } from './page404/page404.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/add-todo',
    pathMatch: 'full'
  },{
    path: 'add-todo',
    component: AddTodoComponent
  },{
    path: 'list-todo',
    component: ListTodoComponent
  },{
    path: 'update-todo/:id',
    component: UpdateTodoComponent
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
