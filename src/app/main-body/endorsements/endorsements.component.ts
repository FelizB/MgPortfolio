import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-endorsements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './endorsements.component.html',
  styleUrl: './endorsements.component.css',
})
export class EndorsementsComponent {
  endorsers = [
    {
      imageLink: 'assets/images/passport.png',
      name: 'Robert Maubi',
      phone: '+254728625050',
      email: '',
      address: 'PO BOX 20094 - 00200',
      information:
        'Robert is my uncle and my guardian for as long as I have lived in this earth',
      comment: '',
    },
    {
      imageLink: 'assets/images/passport.png',
      name: 'Weldon Kipyegon',
      phone: '+254721501604',
      email: 'kipyegon.weldon@equitybank.co.ke',
      address: 'PO BOX 20094 - 00200',
      information: 'Head of QA and Testing, Equity Group',
      comment: 'Weldon is my manager and senior staff at Equity Group',
    },
    {
      imageLink: 'assets/images/passport.png',
      name: 'Ian Sabato',
      phone: '+254726643386',
      email: 'ian.sabato@equitybank.co.ke',
      address: 'PO BOX 75104 - 00200',
      information: 'Group Head of Process Improvement, Equity Group',
      comment: '',
    },
    {
      imageLink: 'assets/images/passport1.png',
      name: 'Elizabeth Ochieng',
      phone: '+254723786459',
      email: 'elizabeth.ochieng@equitybank.co.ke',
      address: 'PO BOX 41895 - 00100',
      information:
        'Business Growth and Development Manager, Equity Kilimani Branch',
      comment: '',
    },
  ];
}
