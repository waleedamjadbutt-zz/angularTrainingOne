import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.getUsers().subscribe(data => {
        this.users = data;
      }
    );
  }

}
