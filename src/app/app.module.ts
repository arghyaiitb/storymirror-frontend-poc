import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {appRouting} from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundAppComponent } from './page-not-found-app/page-not-found-app.component';

import { StoryModule } from './story/story.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    StoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
