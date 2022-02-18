import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieSource = new Subject<Movie>()
  publishedMovie = this.movieSource.asObservable();
  constructor() { }
  movieAnnouncement(movie){
    this.movieSource.next(movie)
  }
}
