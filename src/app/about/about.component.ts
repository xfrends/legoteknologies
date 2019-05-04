import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(event) {
    let about = document.getElementById('about');
    if (about !== null) {
      about.scrollIntoView({ behavior: 'smooth', block:'start', inline: 'start'});
      about = null;
    }
  }
}
