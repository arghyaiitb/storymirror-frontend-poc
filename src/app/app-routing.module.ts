/**
 * Created by argo on 22/05/17.
 */
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { PageNotFoundAppComponent } from './page-not-found-app/page-not-found-app.component';
import { UnderconstructionAppComponent} from './underconstruction-app/underconstruction-app.component';

const appRoutes: Routes = [
  {path: 'inprogress', component: UnderconstructionAppComponent},
  {path: 'page', component: PageNotFoundAppComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
