import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChild('projectSection') projectSection!: ElementRef<HTMLElement>;
  @ViewChild('projectImage') projectImage!: ElementRef<HTMLImageElement>;
  @ViewChild('projectSkills') projectSkills!: ElementRef<HTMLElement>;
  @ViewChild('projectDescription') projectDescription!: ElementRef<HTMLElement>;
  @ViewChild('arrowLeft') arrowLeft!: ElementRef<HTMLButtonElement>;
  @ViewChild('arrowRight') arrowRight!: ElementRef<HTMLButtonElement>;

  projects = [
    {
      status: 'active',
      id: '01',
      section: 'Quality assurance - IBS',
      description:
        'The latest project I have been working on is a Corporate Internet Banking solution. While the solution is yet to be launched in the market, I am proud to have contributed to its testing journey. Due to its pre-release status, specific details remain confidential at this time.',
      skills: 'Test Lead and Manual Testing',
      githubLink: '',
      liveLink: '',
      imageLink: 'assets/images/IBS.jpg',
    },
    {
      status: '',
      id: '02',
      section: 'Quality assurance - ERP',
      description:
        'As the Test Lead for the upgrade of the bank’s ERP system, I played a key role in ensuring its quality and reliability. This experience provided valuable insights into collaboration, testing, system integration, architecture, and management responsibilities, significantly enhancing my professional expertise.',
      skills: 'Test Lead and Manual Testing',
      githubLink: '',
      liveLink: '',
      imageLink: 'assets/images/ERP.jpg',
    },
    {
      status: '',
      id: '03',
      section: 'Web development - EQMS',
      description:
        'This is a personal project that came up as a way of enhancing the QA - master project using Angular framework',
      skills: 'HTML,CSS,Javascript, Angular',
      githubLink:
        'https://github.com/FelizB/Equity-Quality-Management-System-EQMS',
      liveLink: '',
      imageLink: 'assets/images/EQMS.png',
    },
    {
      status: '',
      id: '04',
      section: 'Web development - QA Master',
      description:
        'This is a personal project I did trying to automate the Quality assurance functions in a corporate world using react framework',
      skills: 'HTML,CSS,Javascript, React',
      githubLink: 'https://github.com/FelizB/QA_MAIN',
      liveLink: 'https://qa-master1.onrender.com/dashboard',
      imageLink: 'assets/images/qaMaster.png',
    },
    {
      status: '',
      id: '05',
      section: 'Web development - Portfolio',
      description:
        'This is a personal project I have done to put my resume as an online live page',
      skills: 'HTML,CSS,Javascript, Angular',
      githubLink: 'https://github.com/FelizB/Felix-portfolio-A1',
      liveLink: '',
      imageLink: 'assets/images/portfolio.png',
    },
  ];

  index = 0;

  ngAfterViewInit() {
    this.updateProjectUI();
  }

  updateProjectUI() {
    const currentProject = this.projects[this.index];

    // Update project details
    this.projectSection.nativeElement.textContent = currentProject.section;
    this.projectImage.nativeElement.src = currentProject.imageLink;
    this.projectSkills.nativeElement.textContent = currentProject.skills;
    this.projectDescription.nativeElement.textContent =
      currentProject.description;

    // Update arrow button states
    if (this.index === 0) {
      // Disable left arrow and add disabled class
      this.arrowLeft.nativeElement.disabled = true;
      this.arrowLeft.nativeElement.classList.add('disabled');
    } else {
      // Enable left arrow and remove disabled class
      this.arrowLeft.nativeElement.disabled = false;
      this.arrowLeft.nativeElement.classList.remove('disabled');
    }

    if (this.index === this.projects.length - 1) {
      // Disable right arrow and add disabled class
      this.arrowRight.nativeElement.disabled = true;
      this.arrowRight.nativeElement.classList.add('disabled');
    } else {
      // Enable right arrow and remove disabled class
      this.arrowRight.nativeElement.disabled = false;
      this.arrowRight.nativeElement.classList.remove('disabled');
    }
  }

  navigateRight() {
    if (this.index < this.projects.length - 1) {
      this.index++;
      this.updateProjectUI();
    }
  }

  navigateLeft() {
    if (this.index > 0) {
      this.index--;
      this.updateProjectUI();
    }
  }
}
