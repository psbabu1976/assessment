import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList = [];
  selectedTodo = null;
  _todo:string;
  showDel = false; addNew = true;
  @ViewChild('newtodo') ntd: ElementRef;

  constructor(private router:Router) {
    let userdata = JSON.parse(localStorage.getItem(localStorage.getItem('curUser')));
    console.log(143,userdata);
    this.todoList = (userdata);
    //this.todoList.shift();
  }

  ngOnInit() {
  }

  onSelect(todo,i){
    console.log(todo,i);
    todo.id = i;
    this.selectedTodo = todo;
    this._todo = todo.todo;
  }

  done(com){
    if(com=='') {
      this.selectedTodo.todo = this._todo;
      this.selectedTodo = null;
      localStorage.setItem(localStorage.getItem('curUser'),JSON.stringify(this.todoList));
    }else{
      if(this.ntd.nativeElement.value.trim()!='') {
        if(this.todoList==null) this.todoList = [];
        this.todoList.push({todo: this.ntd.nativeElement.value});
        this.ntd.nativeElement.value = '';
        console.log('sending',(JSON.stringify(this.todoList)),'to',localStorage.getItem('curUser'))
        localStorage.setItem(localStorage.getItem('curUser'),JSON.stringify(this.todoList));
      }else alert('Please enter a Todo')
    }
  }

  del(){
    let i = this.selectedTodo.id;
    this.todoList.splice(i,1);
    localStorage.setItem(localStorage.getItem('curUser'),JSON.stringify(this.todoList));
    this.selectedTodo = null;
    this.showDel = false;
    if(this.todoList.length<1) this.addNew = true;
  }

}
