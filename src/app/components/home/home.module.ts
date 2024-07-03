import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { MainAnimationComponent } from 'src/app/shared/main-animation/main-animation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainAnimationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],

  exports:[
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent
  ],

  providers: [],
})
export class HomeModule { }
