import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'users',component : UserListComponent},
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'create-user', component:CreateUserComponent},
  {path:'update-user/:id', component:UpdateUserComponent},
  {path:'user-details/:id',component:ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
