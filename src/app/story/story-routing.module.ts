/**
 * Created by argo on 22/05/17.
 */
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HomeAppComponent } from './home-app/home-app.component';
import { ReadingComponent } from './reading/reading.component';


const StoryRoutes: Routes = [
  {
    path: 'stories',
    children: [
      {
        path: '',
        component: HomeAppComponent
      },
      {
        path: 'reading',
        component: ReadingComponent
      }
    ]
  }
];

export const StoriesRouting: ModuleWithProviders = RouterModule.forChild(StoryRoutes);
