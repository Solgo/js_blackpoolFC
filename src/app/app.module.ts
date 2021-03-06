import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { HomeComponent } from './home/home.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PositionPipe } from './position.pipe';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { CreatePlayerComponent } from './create-player/create-player.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    PlayerPageComponent,
    HomeComponent,
    PlayerDetailComponent,
    PositionPipe,
    AboutComponent,
    AdminComponent,
    EditPlayerComponent,
    CreatePlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
