import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { OverviewComponent }      from './overview/overview.component';
import { ExperienceComponent }    from './experience/experience.component';
import { EducationComponent }     from './education/education.component';
import { PublicationsComponent }  from './publications/publications.component';
import { ProjectsComponent }      from './projects/projects.component';
import { VolunteeringComponent }  from './volunteering/volunteering.component';
import { AboutComponent }         from './about/about.component';
import { ContactComponent }       from "./contact/contact.component";

const routes: Routes = [
  { path: '',       component: OverviewComponent },
  { path: 'about',          component: AboutComponent },
  { path: '**',             redirectTo: 'overview' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
