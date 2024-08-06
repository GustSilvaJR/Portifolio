import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { MainAnimationComponent } from 'src/app/shared/main-animation/main-animation.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectComponent } from '../projects/components/project/project.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainAnimationComponent,
    AboutMeComponent,
    ProjectsComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
  ],

  exports:[
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    AboutMeComponent
  ],

  providers: [],
})
export class HomeModule { }
