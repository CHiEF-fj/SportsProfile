import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage implements OnInit {

  addProfile = [{
    imageURL:"./assets/7.jpg",
    firstName : 'Tom',
    lastName: 'Brady',
    dateOfBirth: '01/07/1999',
    position: 'Quaterback',
    totalWins: '43',
    totalMatch: '47',
    jerseyNo: '15',
    club: 'Bulls'
  },
  {
    imageURL:"./assets/8.jpg",
    firstName : 'Emosi',
    lastName: 'Bai',
    dateOfBirth: '07/01/1999',
    position: 'fullback',
    totalWins: '22',
    totalMatch: '44',
    jerseyNo: '11',
    club: 'SeaSide'
  },
  {
    imageURL:"./assets/9.jpg",
    firstName : 'Ken',
    lastName: 'Ken',
    dateOfBirth: '07/02/1999',
    position: 'wing',
    totalWins: '34',
    totalMatch: '14',
    club: 'Titans'
  },  
  ]
  constructor() { }

  ngOnInit() {
  }

}
