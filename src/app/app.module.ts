import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './authguard.service';

const routes: ModuleWithProviders = RouterModule.forRoot(
  [
    {path: 'login', component: LoginComponent},
    {path: 'todo', component: TodoListComponent, canActivate:[AuthGuard]},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: 'login', pathMatch: 'full'},
  ]
)

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [UsersComponent, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
