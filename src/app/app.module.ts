import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegPageComponent } from './components/reg-page/reg-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { RoutesComponent } from './components/routes/routes.component';
import { LeaderboardsComponent } from './components/leaderboards/leaderboards.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { RewardsComponent } from './components/rewards/rewards.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegPageComponent,
    NotFoundComponent,
    RoutesComponent,
    LeaderboardsComponent,
    HowItWorksComponent,
    RewardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
