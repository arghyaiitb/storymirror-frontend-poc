import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAppComponent } from './home-app/home-app.component';
import { ReadingComponent } from './reading/reading.component';
import { StoriesRouting } from './story-routing.module';
import {MaterialModule, MdNativeDateModule, MdCardModule} from '@angular/material';

import { PresentStory } from './reading/reading.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoriesRouting,
    MdNativeDateModule,
    MdCardModule
  ],
  declarations: [HomeAppComponent, ReadingComponent],
  providers: [PresentStory]
})
export class StoryModule { }
