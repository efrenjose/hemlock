import { Component, OnInit } from '@angular/core';
import { TeamMembersService } from '../shared/team-members.service';
import { TeamMember } from '../shared/team-member.model';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {
  teamMembers = [];

  constructor(private teamMembersService: TeamMembersService) { }

  ngOnInit() {
    this.getTeamMembers();
  }

  getTeamMembers() {
    this.teamMembersService.all()
      .subscribe(teamMembers => this.teamMembers = teamMembers.json());
  }

}
