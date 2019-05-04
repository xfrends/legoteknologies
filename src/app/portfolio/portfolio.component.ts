import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(event) {
    let portfolio = document.getElementById('portfol');
    if (portfolio !== null) {
      portfolio.scrollIntoView({ behavior: 'smooth', block:'start', inline: 'start'});
      portfolio = null;
    }
  }

  portfolio = [
    {
      "_id": "5ba209902e83b252ddcd3fg1",
      "urlWebsite": "http://s4codingcenter.com/tripkuy/",
      "title": "Trip Kuy",
      "urlImage": "assets/tripkuy.png",
      "desc": "Situs web untuk mempromosikan berbagai potensi daerah dan pariwisata nusantara kepada dunia."
    },
    {
      "_id": "5ba209902e83b252ddcd3fg2",
      "urlWebsite": "http://s4codingcenter.com/",
      "title": "S4 Coding Center",
      "urlImage": "assets/s4codingcenter.png",
      "desc": "S4CampTech Coding Center adalah tempat untuk belajar dan melatih diri untuk menjadi programmer."
    },
    {
      "_id": "5ba209902e83b252ddcd3fg3",
      "urlWebsite": "https://www.celhumtravel.com/",
      "title": "Celhum Travel",
      "urlImage": "assets/celhumtravel.png",
      "desc": "Celhum Travel ingin berperan dalam mempromosikan pesona Indonesia untuk wisatawan domestik maupun mancanegara."
    },
    {
      "_id": "5ba209902e83b252ddcd3fg4",
      "urlWebsite": "https://obbi.id/",
      "title": "Obbi",
      "urlImage": "assets/obbi.png",
      "desc": "Obbi adalah sebuah perusahan ecommerse yang memiliki misi mulia untuk membangun negri dan mensejahterakan pribumi."
    },
    {
      "_id": "5ba209902e83b252ddcd3fg5",
      "urlWebsite": "https://albantanibendung.org/",
      "title": "Albantani Bendung",
      "urlImage": "assets/albantani.png",
      "desc": "Albantani Bendung adalah Lembaga yang Mempunyai Maksud dan Tujuan Memperkuat Masyarakat Dibidang Sosial, Kemanusiaan, Keagamaan Dan Kebudayaan.."
    },
    {
      "_id": "5ba209902e83b252ddcd3fg6",
      "urlWebsite": "https://www.mahribeton.net/",
      "title": "Mahri Beton",
      "urlImage": "assets/mahribeton.png",
      "desc": "Mahri Beton adalah Produsen yang berpengalaman dan profesional dalam memproduksi Paving Block, Buis Beton, U-Ditch, Kanstin, Pagar Panel, dan Grass Block."
    },
  ];
}
