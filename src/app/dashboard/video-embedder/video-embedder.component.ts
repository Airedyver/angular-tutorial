import { Component, Input } from "@angular/core";
import { Video } from '../types';

@Component({
  selector: 'abc-video-embedder',
  templateUrl: './video-embedder.component.html'
})
export class VideoEmbedderComponent {
  @Input() selectedVideo: Video;
}