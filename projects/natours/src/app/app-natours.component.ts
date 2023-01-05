import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FaviconsService } from 'src/app/services/favicons.service';

@Component({
  selector: 'app-natours-root',
  templateUrl: './app-natours.component.html',
  styleUrls: ['./app-natours.component.scss'],
})
export class AppNatoursComponent implements OnInit, AfterViewInit {

  newTitle = 'Natours | Exciting tours for adventurous people'

  constructor(private faviconService: FaviconsService, private titleService: Title) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.titleService.setTitle(this.newTitle);
    this.faviconService.updateFavicon('./assets/icons/natours.ico');
  }
}
