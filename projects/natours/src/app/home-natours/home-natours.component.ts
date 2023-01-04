import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-natours',
  templateUrl: './home-natours.component.html',
  styleUrls: ['./home-natours.component.scss']
})
export class HomeNatoursComponent implements OnInit {

  // favIcon: any  = document.querySelector('#appIcon');

  // status = 'favicon.ico'

  ngOnInit(): void {
  //  this.changeIcon()

  }
  changeIcon() {
    // this.favIcon.href = `assets/img/${this.status}`;
  }

}
