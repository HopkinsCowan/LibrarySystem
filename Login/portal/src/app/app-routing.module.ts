import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './screens/books/books.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {
    path:'', 
    component: LoginComponent
  },
  {
    path:'login', 
    component: LoginComponent
  },
  {
    path:'book', 
    component: BooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
