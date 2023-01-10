import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-natours-root',
  templateUrl: './app-natours.component.html',
  styleUrls: ['./app-natours.component.scss'],
})
export class AppNatoursComponent implements OnInit {
  constructor(
    private window: Window,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.window.performance) {
      if (this.window.performance.navigation.type == 1) {
        // alert('This page is reloaded');
        this.router.navigate(['/natours']);
      } else {
        // alert('This page is not reloaded');
      }
    }
  }
}
