import { Injectable } from '@angular/core';
import { Article } from '../_models/article.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ArticleFilter } from '../_models/article-filter.model';

const URL : string = "http://localhost:3000/articles";

@Injectable()
export class ArticlesService {

  constructor(private http:HttpClient) {
  }

  addArticle(article : Article) : Observable<Article>{
    return this.http.post<Article>(URL, article).pipe();
  }
  getList(params? : any):Observable<Article[]>{
    return this.http.get<Article[]>(URL, {
      params: new HttpParams({fromObject: params})
    }).pipe();
  }

}
