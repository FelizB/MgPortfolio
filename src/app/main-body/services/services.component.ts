import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [
    {
      icon: 'bx bx-test-tube',
      externalLink: '',
      title: 'Quality Assurance',
      information:
        'As a test automation engineer, I design and implement automated tests using Robot Framework for both API and UI automation. I create test scripts to validate the functionality, performance, and security of web applications, using Robot Framework’s keyword-driven approach for readability and maintainability. For UI automation, I integrate tools like Selenium with Robot Framework, while for API testing, I leverage libraries like Requests and RESTinstance. By automating regression, functional, and performance tests, I streamline the testing process and ensure high-quality releases. I continuously explore new tools and best practices to optimize the automation process and improve efficiency.',
    },
    {
      icon: 'bx bx-loader-circle',
      externalLink: '',
      title: 'Quality Assurance',
      information:
        'As a Quality Assurance professional, I design and execute test plans to ensure the functionality, performance, and reliability of software products. I identify and report bugs, working closely with developers to troubleshoot and resolve issues. I also focus on improving testing processes and automating repetitive tasks to enhance efficiency. I ensure that all releases meet quality standards by conducting rigorous manual and automated tests. Additionally, I stay updated on emerging testing technologies and methodologies to keep quality practices aligned with industry best practices.',
    },
    {
      icon: '',
      externalLink: '',
      title: 'Networks Engineer ',
      information:
        'As a network engineer, I design, implement, and maintain network infrastructure to ensure reliable and secure connectivity. I handle tasks such as network architecture, hardware deployment, and cloud integration. Security management is also a key focus for me, where I work with firewalls, VPNs, and conduct vulnerability assessments. I also optimize network performance, troubleshoot issues, and provide ongoing support. Additionally, I stay involved in emerging technologies like SDN, 5G, and IoT integration to keep networks cutting-edge.',
    },
    {
      icon: '',
      externalLink: '',
      title: 'Full Stack Developer',
      information:
        'As a full stack developer, I work with JavaScript and TypeScript for both front-end and back-end development, ensuring efficient and scalable code. I design responsive user interfaces using HTML and CSS, while leveraging Angular and React for building dynamic, high-performance applications. On the back-end, I use Laravel to create robust, secure web applications. I focus on seamless integration between these technologies, ensuring a smooth user experience and maintaining clean, maintainable code. I stay updated with the latest features and best practices to keep delivering cutting-edge solutions.',
    },
    {
      icon: '',
      externalLink: '',
      title: 'Cybersecurity Expert',
      information:
        'As a cybersecurity expert, I design and implement security measures to protect systems, networks, and data from cyber threats. I conduct vulnerability assessments, penetration tests, and audits to identify and address security risks. I work to prevent data breaches by configuring firewalls, managing access controls, and ensuring compliance with security policies. I also respond to incidents, investigating security breaches and mitigating damage. Additionally, I stay informed about the latest cybersecurity trends and emerging threats to ensure proactive protection.',
    },
    {
      icon: '',
      externalLink: '',
      title: 'Leadership and Professionalism',
      information:
        'As a leader and professional in the private sector, I focus on fostering a collaborative and results-driven environment where teams can thrive. I lead by example, ensuring clear communication, setting realistic goals, and providing the resources and support needed for success. I prioritize strategic decision-making and innovation to drive business growth while maintaining high ethical standards and accountability. I also mentor and motivate my team members, helping them develop their skills and achieve their career aspirations. By adapting to market trends and continuously improving processes, I ensure the organization remains competitive and successful.',
    },
  ];
}
