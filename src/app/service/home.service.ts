import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import {Observable,of, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { appConfig } from "src/app/app.config";
  
@Injectable()
export class HomeService {
  selectedCarousel : Carousel;
  carouselList : Carousel[];
  constructor(private http : Http) { }
 
  postCarousel(slide : Carousel){
    var body = JSON.stringify(slide);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appConfig.apiUrl+ '/carousel',body,requestOptions).pipe(map(x => x.json()));
  }
 
  putCarousel(id, slide) {
    var body = JSON.stringify(slide);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appConfig.apiUrl+'/carousel/' + id,
      body,
      requestOptions).pipe(map(res => res.json()));
  }

  getCarousel(): Observable <Carousel[]>{
    // pack in "pipe()"
    return this.http.get(appConfig.apiUrl+'/carousel').pipe(
      // eg. "map" without a dot before
      map((data : Response) => { 
        return data.json()as Carousel[];
      }),
      // "catchError" instead "catch"
      catchError(error => {
        return Observable.throw('Something went wrong ;)');
      })
    );
  }
 
  deleteCarousel(id: number) {
    return this.http.delete(appConfig.apiUrl+'/carousel/' + id).pipe(map(res => res.json()));
  }
}

export class Carousel {
  id: string;
  title: string;
  subTitle: string;
  urlImage: string;
}
