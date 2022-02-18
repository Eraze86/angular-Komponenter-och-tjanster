import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  constructor(private service: MovieService) { }

  ngOnInit(): void {
  }

  toggle(){
    this.service.movieAnnouncement({title: "Star Wars - Rise of Skywalker", length:210})
  }
}
