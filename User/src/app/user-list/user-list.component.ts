import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit{

  use!: User[];
  constructor(private userService:UserService,
    private router: Router){}

  ngOnInit(): void {
   this.getUser();
  }

  getUser(){
    this.userService.getUserList().subscribe(data =>{
      this.use = data;
    });
  }

  updateUser(id: number){
  this.router.navigate(['update-user',id]);
  }
  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe((data: any) =>{
      this.getUser();
      console.log(data);
      
    })
  }

  viewUser(id:number){
    this.router.navigate(['user-details',id]);
  
  }
   

}
