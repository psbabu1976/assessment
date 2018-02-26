import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsersComponent} from '../users/users.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('usr') usr: ElementRef;
  @ViewChild('pwd') pwd: ElementRef;

  constructor(private usrsc: UsersComponent, private router: Router) { }

  ngOnInit() {
  }

  checkUser(){
    let usrs = this.usrsc.GetUserList();
    console.log(usrs)
    for(var u in usrs)
      if(usrs[u].usr == this.usr.nativeElement.value){
        if(usrs[u].pwd == this.pwd.nativeElement.value) {
          console.log('Found ', usrs[u].usr);
          localStorage.setItem('curUser', usrs[u].usr)
          this.router.navigate(['todo'])
            .then(err => {
              console.log(err)
            });
          break;
        }else {
          alert('Invalid Credentials!');break;
        }
      }

  }
}
