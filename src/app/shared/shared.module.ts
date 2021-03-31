import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule
  ]
})
export class SharedModule { }
