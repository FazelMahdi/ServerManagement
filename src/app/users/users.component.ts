import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {
      name:'نیلوفر',
      id: 1
    },
    {
    name: 'علی',
    id: 5,
    },
    {
      name:'محمد',
      id: 2
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
