import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent  implements OnInit{
  id!: number
  user!: User;
  constructor (private route: ActivatedRoute,
    private userService: UserService) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.user=new User();
    this.userService.getUserById(this.id).subscribe(data=>{
      this.user=data;
});
  }
}
