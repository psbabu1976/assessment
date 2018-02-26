import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  MockUsers = [
    {usr: 'test', pwd: 'test'},
    {usr: 'suman', pwd: 'suman'}
  ];

  constructor() { }

  ngOnInit() {
  }

  GetUserList(){
    return this.MockUsers;
  }

}
