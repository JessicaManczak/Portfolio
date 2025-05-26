import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-single-project',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-200%)', opacity: 0 }),
        animate('1.0s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(200%)', opacity: 0 }),
        animate('1.0s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})

export class SingleProjectComponent implements AfterViewInit {
  isVisible = false;

  singleProject: { img: string, h2: string, h3: string, p: string, liveLink: string, gitLink: string  }[] = [
    {img: 'assets/img/join.png', h2: 'Join', h3: 'JavaScript | HTML | CSS | Firebase', p: 
        'SINGLE_PROJECT.DESCRIPTION_1'
      , liveLink: 'https://jessicamanczak.de/Join/', gitLink: 'https://github.com/JessicaManczak/Join'
    },
    {img: 'assets/img/sharkie.png', h2: 'Sharkie', h3: 'JavaScript | HTML | CSS', p:
        'SINGLE_PROJECT.DESCRIPTION_2'
      , liveLink: 'https://jessicamanczak.de/Sharkie/', gitLink: 'https://github.com/JessicaManczak/Sharkie'
    },
  /*   {img: 'assets/img/dabubble.png', h2: 'DA Bubble', h3: 'Angular | TypeScript | Firebase', p: 
        'SINGLE_PROJECT.DESCRIPTION_3'
      , liveLink: '#', gitLink: 'https://github.com/JessicaManczak/DABubble'
    }, */
  ];

  isOdd(img: string){    
    var index = this.singleProject.findIndex(function(item){
      return item.img === img
    });
    return index % 2 == 1;
  }

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object,
    private el: ElementRef,
    private cdr: ChangeDetectorRef
  ) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

      if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') || 'en';
      this.translate.use(savedLang);
    }
  }
  
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.cdr.detectChanges(); // Hier wird sichergestellt, dass Angular die Änderung mitbekommt
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(this.el.nativeElement);
    }
  }
}




