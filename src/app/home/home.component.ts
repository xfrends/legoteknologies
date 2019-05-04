import { Component, OnInit } from '@angular/core';
import { HomeService } from "../service/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [1, 2, 3];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    // this.loadCarousel();
  }

  slide = [
    {
      "_id": "5ba209902e83b252ddcd3ff1",
      "title": "LEGO TECHNOLOGIES",
      "subTitle": "WEB | DESKTOP | MOBILE APPS",
      "urlImage": "/assets/home4.jpg",
      "button":"Contact Us",
      "createdAt": "2018-09-19T08:32:16.253Z",
      "updatedAt": "2018-09-19T08:32:16.253Z",
      "__v": 0
    },
    {
      "_id": "5ba2099b2e83b252ddcd3ff3",
      "title": "You need a Promotional Websites?",
      "subTitle": "Let's make something special",
      "urlImage": "/assets/home3.jpg",
      "button":"I Need a Website",
      "createdAt": "2018-09-19T08:32:27.856Z",
      "updatedAt": "2018-09-19T08:32:27.856Z",
      "__v": 0
    },
    {
      "_id": "5ba2099b2e83b252ddcd3ff2",
      "title": "You need Desktop Application?",
      "subTitle": "Call us to create the software",
      "urlImage": "/assets/home2.jpg",
      "button":"I Need a Desktop Apps",
      "createdAt": "2018-09-19T08:32:27.856Z",
      "updatedAt": "2018-09-19T08:32:27.856Z",
      "__v": 0
    },
    {
      "_id": "5ba2099b2e83b252ddcd3ff2",
      "title": "You need Mobile Apps?",
      "subTitle": "The Android apps is ready for you",
      "urlImage": "/assets/home5.jpg",
      "button":"I Need a Android Apps",
      "createdAt": "2018-09-19T08:32:27.856Z",
      "updatedAt": "2018-09-19T08:32:27.856Z",
      "__v": 0
    },
  ];

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

  // slide:{};

  // loadCarousel() {
  //   this.homeService.getCarousel()
  //   .subscribe(
  //     data => {
  //       this.slide = data;
  //       console.log(this.slide, '<==================== slide');
  //     }
  //   );
  // }

}
