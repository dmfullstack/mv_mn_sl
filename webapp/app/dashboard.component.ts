import { Component } from '@angular/core';
import { MovieAppService } from './app.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieAppService]
})
export class DashboardComponent {
  title = 'Dashboard';
  upcomingMoviesList = [];
  trendingMoviesList = [];
  recommendedMoviesList = [];
  imageURI = 'https://image.tmdb.org/t/p/w500';
  constructor(private _movieAppService: MovieAppService) {
    this._movieAppService.getUpcomingMovies().subscribe(data => this.upcomingMoviesList = data);
    this._movieAppService.getTrendingMovies().subscribe(data => this.trendingMoviesList = data);
    this._movieAppService.getRecommendedMovies().subscribe(data => this.recommendedMoviesList = data);
  }

}
