import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent {
  leaderboards: boolean = true;
  showLunchLeaderboard: boolean = false;
  showOnlineSalesLeaderboard: boolean = false;
  showLeaderboard(leaderboard: string) {
    let arrow = document.getElementById(leaderboard + '-arrow') as HTMLElement | null;
    if(arrow?.classList.contains('rotated')) {
      arrow.classList.remove('rotated')
    } else {
      arrow!.classList.add('rotated')
    }
    if(leaderboard == 'lunch') {
      this.showLunchLeaderboard = !this.showLunchLeaderboard;
    }
    if(leaderboard == 'online-sales') {
      this.showOnlineSalesLeaderboard = !this.showOnlineSalesLeaderboard;
    }
  }
}
