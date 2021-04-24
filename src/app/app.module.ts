import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SwiperModule } from 'swiper/angular';
import { MoviesRoutingModule } from './movies/movies-routing.module';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './state/app-state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SwiperModule,
    NgxsModule.forRoot(AppState),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
