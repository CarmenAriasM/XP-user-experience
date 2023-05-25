import { Component, OnInit } from '@angular/core';
import { BackendConnectionService } from 'src/app/shared/services/backend-connection.service';

@Component({
  selector: 'app-uni-leaderboard',
  templateUrl: './uni-leaderboard.component.html',
  styleUrls: ['./uni-leaderboard.component.css']
})
export class UniLeaderboardComponent {
  universities = [];
  constructor(public backendService: BackendConnectionService) {}
  ngOnInit() {
    this.backendService.getLeaderboard().subscribe((data:any) => {
      console.log(data)
      this.universities = data;
    })
  }
}
