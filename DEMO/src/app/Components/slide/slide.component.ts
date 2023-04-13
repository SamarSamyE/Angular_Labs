import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  currentIndex = 0;
  timerId:any;
  images = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
  ];

  showPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  showNext() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }
  slide(){
    this.timerId = setInterval(() => {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }, 500);

  }
  stop(){
    clearInterval(this.timerId);
  }

}
