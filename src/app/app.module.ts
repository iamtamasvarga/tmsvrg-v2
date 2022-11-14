//angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { MeComponent } from '@pages/me/me.component';
import { ProjectsComponent } from '@pages/projects/projects.component';

//libraries
import { menu, HeroIconModule, allIcons } from 'ng-heroicon';

//custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeTogglerComponent } from './components/header/components/navbar/components/theme-toggler/theme-toggler.component';
import { NavbarComponent } from './components/header/components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ThemeTogglerComponent,
    MainLayoutComponent,
    MeComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HeroIconModule.withIcons(
      {
        ...allIcons,
      },
      {
        defaultHostDisplay: 'inlineBlock', // default 'none'
        attachDefaultDimensionsIfNoneFound: true, // default 'false'
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
