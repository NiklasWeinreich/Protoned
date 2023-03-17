import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId ,
    accessToken: environment.contentful.token
  });

  constructor() { }

  //Get all posts
  getMultipleNews(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'news'
    }, query))
    .then(res => res.items);
  }

    //Get a specific post
    getNews(newsId: any): Promise<Entry<any>> {
      return this.client.getEntries(Object.assign({
        content_type: 'news'
      }, {'sys.id': newsId}))
      .then(res => res.items[0]);
    }

  //multiple SmallNews
  getMultiplesmallNews(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'smallNews'
    }, query))
    .then(res => res.items)
  }

  //SmallNews
  getsmallNews(testNewsId: any): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'smallNews'
    }, {'sys.id': testNewsId}))
    .then(res => res.items[0]);
  }

  //Get header news
  getheaderNews(headerNewsId: any): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
    content_type: 'headerNews'
    }, {'sys.id': headerNewsId}))
    .then(res => res.items[0]);
    }

      //multiple SmallNews
  getMultipleheaderNews(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
    content_type: 'headerNews'
    }, query))
    .then(res => res.items)
  }

}
