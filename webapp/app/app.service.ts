import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MovieAppService {


  apiURL = 'http://localhost:3001/';
  recommendedURL = 'recommendedMovies' ;
  upcomingURL = 'upcomingMovies' ;
  trendingURL = 'trendingMovies'  ;
  http: Http;
  api_key = '952b1d5b9d8303a6e815259fb40a8b18';
  apiMovieURL = 'https://api.themoviedb.org/3/movie/';
  upcomingMovieURL = 'upcoming?api_key=' + this.api_key  + '&language=en-US&page=1' ;
  trendingMovieURL = 'popular?api_key=' + this.api_key + '&language=en-US&page=1'  ;
  recommendedMovieURL = '181808/recommendations?api_key='  + this.api_key  + '&language=en-US&page=1' ;


  constructor(http: Http) {
    this.http = http;

  }

  getUpcomingMovies() {
    return this.http.get(this.apiMovieURL + this.upcomingMovieURL ).map((res: Response) => res.json().results);
  }

  getTrendingMovies() {
    return this.http.get(this.apiMovieURL + this.trendingMovieURL ).map((res: Response) => res.json().results);
  }
  getRecommendedMovies() {
    return this.http.get(this.apiMovieURL + this.recommendedMovieURL ).map((res: Response) => res.json().results);
  }

}

