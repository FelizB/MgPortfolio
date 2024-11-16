import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  experience = [
    {
      year: 'July 2022 - Current',
      title: 'Senior System Test Lead',
      company: 'Equity Group, Equity Centre',
      information: [
        'Manual Testing',
        'API Testing',
        'Automation Testing- UI and API',
        'UAT Test Lead',
        'Quality Assurance',
      ],
    },
    {
      year: 'June 2021 – July 2022',
      title: 'Relationship Officer',
      company: 'Equity Bank Kenya, Kilimani Branch',
      information: [
        'Teller',
        'Customer Service Representative',
        'ABC Account Opening Specialist',
        'Digital Champion',
      ],
    },
    {
      year: 'August -September 2017',
      title: 'Digital Agent',
      company: 'Step-Wise ',
      information: [
        'Judicial System Digitization Project',
        'Data management and uploads to the system',
        'Document handling processes',
      ],
    },
    {
      year: 'August -September 2019',
      title: 'Enumerator',
      company: 'Kenya National Bureau of Statistics (KNBS) ',
      information: ['Taking Census'],
    },
    {
      year: 'Oct 2019 – Dec 2021',
      title: 'Data Analyst',
      company: 'Cloud Factory Kenya ',
      information: [
        'Data processing',
        'Statistical Methods',
        'Advanced Tracking',
        'Advanced Excel',
        'Presentation and public speaking',
        'Transcription',
      ],
    },
    {
      year: 'August -September 2017',
      title: 'Polling Clerk',
      company: 'Independent Electoral and Boundaries Commission (IEBC)',
      information: [
        'Tasked with ensuring good conduct of elections in the polling station',
      ],
    },
    {
      year: 'Feb 2016 – August 2016',
      title: 'Relationship Officer -Intern',
      company: 'Equity Bank Kenya Limited',
      information: [
        'Mobile banking and digital champion in the operations Department',
        'Marketing and onboarding the Equitel sim card',
        'ATM issuing, Account opening and Customer service',
      ],
    },
  ];

  education = [
    {
      year: 'Sept 2022 - Oct 2023',
      title: 'Certificate in Software Development',
      institution: 'ALX Academy',
      information:
        'Specialized on Back-end development using C#, python, JavaScript',
    },
    {
      year: 'Sep 2016 - Dev 2021',
      title: 'Bachelor of Tech in Communication and Computer Networks',
      institution: 'The Technical University of Kenya',
      information: 'Awarded Second class Upper Division',
    },
    {
      year: 'Jan 2012 - Nov 2015',
      title: 'Kenya Certificate of Secondary Education (KCSE)',
      institution: 'Nyambaria School',
      information: 'Attained an A- in KCSE',
    },
    {
      year: 'Jan 2003 - Nov 2011',
      title: 'Kenya Certificate of Primary Education (KCPE)',
      institution: 'AEF Reuben Primary School',
      information: 'Attained an 362 marks in KCPE',
    },
  ];

  certifications = [
    {
      title: '',
      institution: '',
      issueDate: '',
      certificateID: '',
      externalLink: '',
    },
  ];
  Skills = [
    {
      icon: 'bx bxl-kubernetes',
      skillName: 'Software Testing & QA',
      information:
        'Expertise in software testing automation tools (RobotFramework, Selenium WebDriver)',
    },
    {
      icon: 'bx bxs-meteor',
      skillName: 'Methodologies',
      information: 'Agile, DevOps, CI/CD, Robot Framework',
    },
    {
      icon: 'bx bxl-dev-to',
      skillName: 'Software Development',
      information:
        'Strong foundation and intermittent in software development principles and practices',
    },
    {
      icon: 'bx bxl-creative-commons',
      skillName: 'Interpersonal & Communication',
      information:
        'Effective communicator with the ability to interact with diverse teams and stakeholders.',
    },
    {
      icon: 'bx bx-spreadsheet',
      skillName: 'Problem-Solving',
      information:
        'Strong analytical skills with a focus on continuous improvement and problem-resolution',
    },
    {
      icon: 'bx bxl-html5',
      skillName: 'HTML',
      information:
        'Proficient in creating well-structured and semantic web pages.',
    },
    {
      icon: 'bx bxl-css3',
      skillName: 'CSS3',
      information:
        'Experienced in designing responsive and visually appealing layouts.',
    },
    {
      icon: 'bx bxl-bootstrap',
      skillName: 'BootStrap',
      information:
        'Skilled in leveraging Bootstrap for fast and responsive UI development.',
    },
    {
      icon: 'bx bxl-angular',
      skillName: 'Angular',
      information:
        'Capable of building dynamic and scalable front-end applications.',
    },
    {
      icon: 'bx bxl-react',
      skillName: 'React.js',
      information:
        'Experienced in developing reusable components and managing state effectively.',
    },
    {
      icon: 'bx bxl-javascript',
      skillName: 'JavaScript',
      information:
        'Proficient in writing efficient and maintainable JavaScript code.',
    },
  ];

  age = () => {
    return new Date().getFullYear() - 1997;
  };
  personalInformation = [
    { name: 'Name', item: 'Felix Bosire' },
    { name: 'Age', item: this.age() },
    { name: 'Nationality', item: 'Kenyan' },
    { name: 'Availability', item: 'Full Time' },
    { name: 'Phone', item: '+254765887292' },
    { name: 'Language', item: 'English, Swahili' },
    { name: 'Gender', item: 'Male' },
    { name: 'City', item: 'Nairobi, Kenya' },
    { name: 'Experience', item: '5+ Years of Work Experience' },
    { name: 'Freelance', item: 'Available' },
    { name: 'Email', item: 'felantezb@gmail.com' },
  ];
}
