import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
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
    this.callBackend()
    interval(10000).subscribe(() => {
      this.callBackend();
    });
  }
  callBackend() {
    this.backendService.getLeaderboard().subscribe((data:any) => {
      this.universities = data.filter((x: { averageScore: number; }) => x.averageScore > 0);
    })
  }
}
