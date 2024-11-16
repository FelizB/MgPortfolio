import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EndorsementsComponent } from './endorsements/endorsements.component';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactsComponent,
    EndorsementsComponent,
  ],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css',
})
export class MainBodyComponent {}
