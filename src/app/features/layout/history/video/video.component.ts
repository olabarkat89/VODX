import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;

 playVideo() {
    const videoEl = this.myVideo.nativeElement;
    if (videoEl.paused) {
      videoEl.play();
    } else {
      videoEl.pause(); // toggle if you like
    }
  }
}
