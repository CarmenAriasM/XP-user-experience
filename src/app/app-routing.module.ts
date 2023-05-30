import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegPageComponent } from './components/reg-page/reg-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RoutesComponent } from './components/routes/routes.component';
import { LeaderboardsComponent } from './components/leaderboards/leaderboards.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { RoutesArticlesComponent } from './components/routes-articles/routes-articles.component';
import { UniLeaderboardComponent } from './components/uni-leaderboard/uni-leaderboard.component';
import { RewardLunchComponent } from './components/reward-lunch/reward-lunch.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'criochfort', component: RegPageComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'routes/articles', component: RoutesArticlesComponent },
  { path: 'leaderboards', component: LeaderboardsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'rewards/reward-code', component: QrCodeComponent },
  { path: 'rewards/reward-lunch', component: RewardLunchComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'uni-leaderboard', component: UniLeaderboardComponent },


  { path: '**', redirectTo: 'not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
