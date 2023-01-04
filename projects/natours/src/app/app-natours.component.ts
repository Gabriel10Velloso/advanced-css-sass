import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FaviconsService } from 'src/app/services/favicons.service';

@Component({
  selector: 'app-natours-root',
  templateUrl: './app-natours.component.html',
  styleUrls: ['./app-natours.component.scss'],
})
export class AppNatoursComponent implements OnInit, AfterViewInit {
  constructor(private faviconService: FaviconsService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.faviconService.updateFavicon('./assets/icons/natours.ico');
  }
}
