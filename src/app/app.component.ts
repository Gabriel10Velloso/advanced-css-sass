import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { FaviconsService } from './services/favicons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  newTitle = '';

  constructor(
    private faviconService: FaviconsService,
    private titleService: Title,
    private renderer2: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {

    // if (window.performance) {
    //   if (performance.navigation.type == 1) {
    //     alert( "This page is reloaded" );
    //   } else {
    //     alert( "This page is not reloaded");
    //   }
    // }

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // console.log(event)
        // event.url = event.url.split('#')[0]
        // event.urlAfterRedirects = event.url.split('#')[0]
        // console.log(event)
        // event.url.split('#')[0]
        // event.url = event.url.split('#')[0]
        if (event.url === '/') {
          this.newTitle = 'Advanced Css Sass'; // Projeto Principal global
          this.renderer2.removeClass(this.document.body, 'NatoursBody');
          this.renderer2.removeClass(this.document.body, 'TrilloBody');
          this.renderer2.addClass(this.document.body, 'AdvancedCssSass');
          this.titleService.setTitle(this.newTitle);
          this.faviconService.updateFavicon('./favicon.ico');
          // this.router.navigate([event.url])
        } else if (event.url === '/natours') {
          this.newTitle = 'Natours'; // Projeto 1
          this.renderer2.removeClass(this.document.body, 'AdvancedCssSass');
          this.renderer2.removeClass(this.document.body, 'TrilloBody');
          this.renderer2.addClass(this.document.body, 'NatoursBody');
          this.titleService.setTitle(this.newTitle);
          this.faviconService.updateFavicon('./assets/icons/natours.ico');
          // this.router.navigate([event.url])
        } else if (event.url === '/trillo') {
          this.newTitle = 'Trillo'; // Projeto 2
          this.renderer2.removeClass(this.document.body, 'AdvancedCssSass');
          this.renderer2.removeClass(this.document.body, 'NatoursBody');
          this.renderer2.addClass(this.document.body, 'TrilloBody');
          this.titleService.setTitle(this.newTitle);
          this.faviconService.updateFavicon('./assets/icons/nat-8.jpg');
          // this.router.navigate([event.url])
        }
      });
  }
}
