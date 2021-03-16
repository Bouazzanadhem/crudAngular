import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  submitted= false;
  updatelistForm: FormGroup = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required])
  })

  constructor(private route: ActivatedRoute,private router: Router) { }
  todoId: any
  lists:any[]=[]
  ngOnInit(): void {
    this.todoId= this.route.snapshot.params['id']
    this.lists = JSON.parse(localStorage.getItem("lists") || '[]');
    let todo= this.lists.find(x=>x.id == this.todoId)
    this.updatelistForm=new FormGroup({
    id: new FormControl(''),
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required])
  });
  
  //
  this.updatelistForm.patchValue(todo)
  }
  updatelist(){
    this.submitted = true;
    if(this.updatelistForm.invalid){
      return;
    }

    console.log(this.updatelistForm.value);
    console.log(this.todoId);
    let index=this.lists.findIndex(x => x.id == this.todoId);
    this.lists.splice(index, 1, this.updatelistForm.value);
    localStorage.setItem("lists",JSON.stringify(this.lists));
    this.router.navigate(['list-todo'])
  }
}
