import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAppComponent } from './home-app/home-app.component';
import { ReadingComponent } from './reading/reading.component';
import { StoriesRouting } from './story-routing.module';
import {MaterialModule, MdNativeDateModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoriesRouting,
    MdNativeDateModule
  ],
  declarations: [HomeAppComponent, ReadingComponent]
})
export class StoryModule { }
