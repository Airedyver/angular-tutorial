import { Component, Input } from "@angular/core";
import { Video } from '../types';

@Component({
  selector: 'abc-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  @Input() videos: Video[];
  @Input() selectedVideo: Video | undefined;
}