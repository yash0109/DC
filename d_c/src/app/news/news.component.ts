import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Object[];

  constructor() {
    this.news = [
      {
        "image": "../../assets/images/meors.jpg",
        "head": "Myntra End of Reason sale is here do check out latest deals on popular brands  ",
        "news": "A lot of new deals and brands have been added this year in  Myntra's End of reason sale and up to 80% off on some products. This time the sale is from 1st May to 5th May 2021 and 13 new brands have been included in this year's sale. Shop Now!!! ",
        "details": "https://timesofindia.indiatimes.com/spotlight/myntra-eors-from-july-3-to-july-8-get-some-outstanding-deals-on-stylish-monsoon-wear-essentials/articleshow/84035068.cms"
      },
      {
        "image": "../../assets/images/ajio_sale.jpg",
        "head": "Ajio upcoming sale upto 90% off on all brands",
        "news": "Ajio is back with excieting deals on all brands with latest styles and trending outfits and the discount ranges from 50-90% along with deals that you can't resist.",
        "details": "https://timesofindia.indiatimes.com/spotlight/its-big-and-its-bold-ajio-has-the-most-desirable-fashion-sale-up-powered-by-superdry-and-it-will-end-on-july-5-2021/articleshow/84017892.cms"
      }
    ]
  }


  ngOnInit(): void {
  }

}
