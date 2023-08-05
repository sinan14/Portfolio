import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email = 'sinuzar5@gmail.com';
  phone = '+91 6282906569';
  linkedIn = 'https://www.linkedin.com/in/mohammed-sinan-31859b215/';
  fcc = 'https://www.freecodecamp.org/fcc0d2793a3-38ad-4ec7-a62f-5d31cc614e4b';
  // Function to copy text to the clipboard
  copyText(identifier: string) {
    const textElement = document.getElementById(identifier)!;

    const textToCopy = textElement.textContent!.trim();

    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    this.showCopiedToast(identifier);
  }

  // Function to show the toast message
  showCopiedToast(identifier: string) {
    const toastMessage = document.getElementById('toast-message');
    const text = identifier === 'email' ? 'Email' : 'Phone';
    toastMessage!.textContent = `${text} copied to clipboard!`;
    toastMessage!.style.display = 'block';

    setTimeout(() => {
      toastMessage!.style.display = 'none';
    }, 2000);
  }
  navigationLinks = [
    { name: 'About', href: '#welcome-section' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  skillsColumn1 = [
    'HTML and CSS',
    'Angular',
    'React',
    'Tailwind CSS',
    'Responsive web design',
    'Sass/SCSS',
    'Bootstrap',
  ];

  skillsColumn2 = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'Git and GitHub',
    'RESTful APIs',
    'Typescript',
  ];
  projects = [
    {
      title: 'React comment section',
      imageUrl: 'assets/fm-cmnt-section.jpg',
      liveLink: 'https://sinan14.github.io/fm-interactive-comment-section/',
      sourceLink: 'https://github.com/sinan14/fm-interactive-comment-section',
    },
    {
      title: 'Angular Todo app',
      imageUrl: 'assets/todo-app.jpg',
      liveLink: 'https://sinan14.github.io/todo-app-angular/',
      sourceLink: 'https://github.com/sinan14/todo-app-angular',
    },
    {
      title: 'E-commerce Product page',
      imageUrl: 'assets/ecom-product.jpg',
      liveLink: 'https://sinan14.github.io/ecommerce-page/',
      sourceLink: 'https://github.com/sinan14/ecommerce-page',
    },
    {
      title: 'Student Enrollment System',
      imageUrl: 'assets/studentEnrollmentSystem.jpg',
      liveLink: 'http://ec2-18-219-147-180.us-east-2.compute.amazonaws.com/',
      sourceLink: 'https://github.com/sinan14/student-enrollment-system',
    },
    {
      title: 'React Pomodoro Clock',
      imageUrl: 'assets/pomodoro-clock.png',
      liveLink: 'https://sinan14.github.io/fcc-pomodor-clock/',
      sourceLink: 'https://github.com/sinan14/fcc-pomodor-clock',
    },
    {
      title: 'React Calculator',
      imageUrl: 'assets/react-calculator.png',
      liveLink: 'https://sinan14.github.io/fcc-js-calculator/',
      sourceLink: 'https://github.com/sinan14/fcc-js-calculator',
    },
    {
      title: 'React Drum machine',
      imageUrl: 'assets/drum-machine.png',
      liveLink: 'https://sinan14.github.io/fcc-drum-machine/',
      sourceLink: 'https://github.com/sinan14/fcc-drum-machine',
    },
    {
      title: 'Multi step form using angular',
      imageUrl: 'assets/ang-multi-step.jpg',
      liveLink: 'https://sinan14.github.io/Multistep-form/',
      sourceLink: 'https://github.com/sinan14/Multistep-form.git',
    },
    {
      title: 'News homepage',
      imageUrl: 'assets/news-homepage.jpg',
      liveLink: 'https://sinan14.github.io/news-home-page-main/',
      sourceLink: 'https://github.com/sinan14/news-home-page-main',
    },
    {
      title: 'Notification page',
      imageUrl: 'assets/notificationpage.jpg',
      liveLink: 'https://sinan14.github.io/notification-page/',
      sourceLink: 'https://github.com/sinan14/notification-page',
    },
    {
      title: 'Interactive card details form',
      imageUrl: 'assets/interactive-card-details.jpg',
      liveLink: 'https://sinan14.github.io/interactive-card-details-form/',
      sourceLink: 'https://github.com/sinan14/interactive-card-details-form/',
    },
  ];
}
