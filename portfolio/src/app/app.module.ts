import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ButtonComponent } from './components/button/button.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/sections/home/home.component';
import { NavTitleComponent } from './components/nav-title/nav-title.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { NotePointComponent } from './components/note-point/note-point.component';
import { WorkComponent } from './components/sections/work/work.component';
import { MainProjectComponent } from './components/main-project/main-project.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ButtonComponent,
    SidenavComponent,
    HomeComponent,
    NavTitleComponent,
    AboutComponent,
    ExperienceComponent,
    NotePointComponent,
    WorkComponent,
    MainProjectComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
