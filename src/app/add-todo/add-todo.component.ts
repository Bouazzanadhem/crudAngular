import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  submitted= false;
  addlistForm: FormGroup = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required])
  })
  showUpdateButton= false;
  UserData:any[]=[]
  index:any
  updateList(i:number){
    console.log(i);
    this.index=i
    const userData=this.UserData[i]
    this.addlistForm.patchValue(userData)
    this.showUpdateButton= true;
  }
  
  deleteList(i:number){
    console.log(i);
    this.UserData.splice(i,1);
    
  }
  constructor(public route: Router,private snackbar:MatSnackBar) { }
    id:any
  ngOnInit(): void {
    this.id = Math.floor(Math.random()*100);
  }
  addlist(){
    this.submitted = true;
    if(this.addlistForm.invalid){
      return;
    }
    this.UserData.push(this.addlistForm.value)
    console.log(this.UserData);
    this.addlistForm.reset();
    this.submitted = false;
    // this.snackbar.open("added", "close", {
    //   duration: 2000,

    // });
  }
  saveUpdate(){
    console.log(this.index);
    this.submitted = true;
    if(this.addlistForm.invalid){
      return;
    }
    this.UserData.splice(this.index,1,this.addlistForm.value)
    this.addlistForm.reset();
    this.submitted = false;
    this.showUpdateButton= false;
  }

}
