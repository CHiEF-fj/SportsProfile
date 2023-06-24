import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage {

  teamMembers: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchTeamMembers();
  }

  fetchTeamMembers() {
    this.teamMembers = this.dataService.getMembers();
  }
}
