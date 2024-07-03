import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { BtnPrimaryComponent } from './shared/btn-primary/btn-primary.component';
import { HomeModule } from './components/home/home.module';
import { MainSectionComponent } from './shared/main-section/main-section.component';
import { MainAnimationComponent } from './shared/main-animation/main-animation.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
