import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Entry } from 'contentful';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  multipleNews: Entry<any>[] = [];

  getMultiplesmallNews: Entry<any>[] = [];

  constructor(private router: Router, private contentfulService: ContentfulService ) {}

  ngOnInit(): void {
    this.contentfulService.getMultipleNews()
    .then(multipleNews => this.multipleNews = multipleNews)

    //TEST
    this.contentfulService.getMultiplesmallNews()
    .then(getMultiplesmallNews => this.getMultiplesmallNews = getMultiplesmallNews)
  }

  goToNewsDetailsPage(newsId: any){
    this.router.navigate(['/news/', newsId]);

  }
}
