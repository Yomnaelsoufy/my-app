import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private httpservice: HttpService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.httpservice.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
