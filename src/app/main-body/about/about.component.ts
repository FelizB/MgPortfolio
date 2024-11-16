import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutMe = `
    I would describe myself as a hardworking individual dedicated to achieving set goals. 
    I'm a leader, an ELP mentor, and a master of computing. I’m an active person who loves 
    adventures, sports, and exploring new technologies. \n

    My interests include animation and programming, particularly Java, Python, web, and Android development. 
    I have also undergone training in professional skills, problem-solving, and presentation techniques 
    through the IBM P-TECH forum. Recently, I discovered that my interpersonal style aligns with "The Expressor."\n

    I believe the world is full of opportunities, and I am focused on finding and settling into my ideal professional career.
  `;
}
