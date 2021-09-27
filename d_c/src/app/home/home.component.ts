import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  User: any = [];
  constructor() {

  }

  ngOnInit() {
    //calling the method to dynamically change images in backgroud
    this.changeImages();
  }
  //method to change background images in certain interval
  changeImages() {
    var homeDiv = document.getElementById("yhome");
    //styling for full height of image and centering in appropriately in div tag
    homeDiv.style.height = "100%";
    homeDiv.style.backgroundPosition = "center";
    homeDiv.style.backgroundRepeat = "no-repeat";
    homeDiv.style.backgroundSize = "cover";
    //array list of images
    const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    var counter = 0;
    //interval set for 2 sec
    let intervalId = setInterval(() => {

      homeDiv.style.backgroundImage = "url(/assets/images/himages/" + images[counter++] + ")";
      //setting the counter back to 0 to avound index out of bounds exception
      if (counter == 5) {
        counter = 0;
      }
    }, 2000)
  }
}
