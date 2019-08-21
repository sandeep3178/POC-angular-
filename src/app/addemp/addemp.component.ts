import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  pagename: string = "Add-employee"
  constructor(public userservice: UserService) { }
  newfunc5() {
    this.userservice.setPage(this.pagename);
  }
  ngOnInit() {
    this.newfunc5();
  }

}
