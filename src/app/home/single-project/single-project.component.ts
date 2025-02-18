import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})

export class SingleProjectComponent {
  singleProject: { img: string, h2: string, h3: string, p: string[], liveLink: string, gitLink: string  }[] = [
    {img: 'assets/img/join.png', h2: 'Join', h3: 'Angular | TypeScript | HTML | CSS | Firebase', p: [
        'Task manager inspired by the Kanban System.',
        'Create and organize tasks and drop functions.',
        'Assign users and categories.'
      ], liveLink: '#', gitLink: 'https://github.com/JessicaManczak/Join'
    },
    {img: 'assets/img/sharkie.png', h2: 'Sharkie', h3: 'JavaScript | HTML | CSS', p: [
        'A simple Jump-and-Run game based on an object-oriented approach.',
        'Help Sharkie to find coins and poison bottles.',
        'Fight against the killer whale.'
      ], liveLink: '#', gitLink: 'https://github.com/JessicaManczak/Sharkie'
    },
    {img: 'assets/img/dabubble.png', h2: 'DA Bubble', h3: 'Angular | TypeScript | Firebase', p: [
        'This App is a Slack Clone App.',
        'It revolutionizes team communication and collaboration.',
        'Real-time messaging and robust channel organization.'
      ], liveLink: '#', gitLink: '#'
    },
  ];

  isOdd(img: string){    
    var index = this.singleProject.findIndex(function(item){
      return item.img === img
    });
    return index % 2 == 1;
  }
}




