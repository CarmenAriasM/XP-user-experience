import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent {
  leaderboards: boolean = true;
  showLunchLeaderboard: boolean = false;
  showOnlineSalesLeaderboard: boolean = false;
  previousUrl;
  denied: boolean = false;
  accepted: boolean = false;
  constructor(public router: Router) {
    this.previousUrl = this.router.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();
  }
  ngOnInit() {
    if(this.previousUrl == '/notifications') {
      this.leaderboards = false;
    }
  }
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
  toggleLeaderboards(section: string) {
    if(section == 'friends') {
      this.leaderboards = false;
      this.showLunchLeaderboard = false;
      this.showOnlineSalesLeaderboard = false;
    } else {
      this.leaderboards = true;
    }
  }
  denyRequest() {
    this.denied = true;
  }
  acceptRequest() {
    this.accepted = true;
  }
}
