import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  templateUrl: './recommendation.component.html',
  styleUrls: ['./app.component.css']
})
export class RecommendationComponent {
  title = 'Book My Show!';
  api_key = '952b1d5b9d8303a6e815259fb40a8b18';
  apiURL = 'https://api.themoviedb.org/3/movie/';
  recommendationURL = '/recommendations?api_key=' + this.api_key + '&language=en-US&page=1\''  ;
  movies = [];
  http: Http;
  searchTerm = '';
  recommendedMoviesList = [];
  imageURI = 'https://image.tmdb.org/t/p/w500';
  constructor(http: Http) {
    this.http = http;

  }
  searchMovies(): void {
    const apiLink = this.apiURL + this.searchTerm + this.recommendationURL;

    this.http.request(apiLink)
      .subscribe((res: Response) => {
        this.movies = res.json().data;
        console.log(this.movies);
      });
  }

  recommendedMovies(): void {
    const apiLink = this.apiURL + this.recommendationURL;
    this.http.request(apiLink)
      .subscribe((res: Response) => {
        this.recommendedMoviesList = res.json().results;
        console.log(this.recommendedMoviesList);
      });
  }
}
