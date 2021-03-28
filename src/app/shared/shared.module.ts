import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule
  ]
})
export class SharedModule { }
