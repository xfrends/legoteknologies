import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  articles = [
    {
      "_id": "5ba209902e83b252ddcd3fh1",
      "title": "Trip Kuy",
      "urlImage": "assets/tripkuy.png",
      "desc": "Situs web untuk mempromosikan berbagai potensi daerah dan pariwisata nusantara kepada dunia.",
      "postBy": "Frendi Triarista",
      "createdAt": "2018-09-19T08:32:25.856Z",
    },
    {
      "_id": "5ba2099b2e83b252ddcd3fh2",
      "title": "You need Front-End Web Developer?",
      "urlImage": "/assets/home2.jpg",
      "desc": "Situs web untuk mempromosikan berbagai potensi daerah dan pariwisata nusantara kepada dunia.",
      "postBy": "Frendi Triarista",
      "createdAt": "2018-09-19T08:32:27.856Z",
    },
  ];
  order: string = 'createdAt';

}
