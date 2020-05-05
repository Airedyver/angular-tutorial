import { Component, OnInit } from '@angular/core';
import { Video } from './types';

const videos: Video[] = [
  {
    id: 'asdasd',
    author: 'Jack Balbes',
    title: 'Angular Input Examples',
    viewDetails: [
      {
        age: 25,
        region: 'North America',
        date: '2020-5-5'
      }
    ]
  },
  {
    id: 'asddddddsasasjjfiihoeh',
    author: 'Kyle Cordes',
    title: 'React Examples',
    viewDetails: [
       {
        age: 30,
        region: 'North America',
        date: '2020-5-3'
      }
    ]
  }
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  videoList = videos;
  selectedVideo: Video | undefined = videos[0];
  constructor() { }

  ngOnInit() {
  }

}