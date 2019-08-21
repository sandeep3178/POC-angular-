import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  pagename1: string = "Employee-list"
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.newfunc4();
  }
  newfunc4() {
    this.userservice.setPage(this.pagename1);
  }
}
