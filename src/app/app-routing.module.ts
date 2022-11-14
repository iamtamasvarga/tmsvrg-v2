import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { HomeComponent } from '@pages/home/home.component';
import { MeComponent } from '@pages/me/me.component';
import { ProjectsComponent } from '@pages/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'me', component: MeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
