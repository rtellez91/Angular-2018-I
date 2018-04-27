import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { Observer } from 'rxjs/Observer';
import { ArticleFilter } from '../_models/article-filter.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  title = 'awoifkashfk!';
  articles:Article[];
  listObservable:any;

  filter : ArticleFilter;
  
  constructor(private articleService:ArticlesService) { 
    this.filter = new ArticleFilter();
  }

  ngOnInit() {
    //this.articles=this.articleService.articles;
    this.loadList();
  }

  sortingByPoints(){
    return this.articles.sort((a:Article, b:Article)=> b.votes - a.votes);
  }
  loadList(){
    this.articleService.getList(this.filter).subscribe(
      result=>{
        this.articles= result;
      },err=>{
        console.log("error");
      },
      ()=>{
        console.log("finished");
      }
    );
  }

  change() : void {
    this.articleService.getList(this.filter).subscribe(
      result => {
        this.articles = result;
      }
    )
  } 

}
