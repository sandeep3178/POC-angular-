import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FilterPipeModule, FilterPipe } from 'ngx-filter-pipe';
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  pagename1: string = "Employee-list";
  employees: any = [];
  userFilter: any = { name: '' };
  constructor(private userservice: UserService, private http: HttpClient, private filterpipe: FilterPipe) {
    console.log(filterpipe.transform(this.employees, { name: '' }));
  }

  ngOnInit() {
    this.newfunc4();
    this.onSubmit();
  }
  newfunc4() {
    this.userservice.setPage(this.pagename1);
  }
  onSubmit() {
    this.http.get("http://localhost:3000/employee").subscribe(
      data => {

        this.employees = data;
        console.log(this.employees);

      })
  }
}
