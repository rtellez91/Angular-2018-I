import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { ArticleFilter } from '../_models/article-filter.model';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss']
})
export class ArticleFilterComponent implements OnInit {

  @Input() articles : Article[];
  filter : ArticleFilter;

  constructor(private articleService : ArticlesService) { 
    this.filter = new ArticleFilter();
  }

  ngOnInit() {
  }

  change() : void {
    this.articleService.getList(this.filter).subscribe(
      result => {
        this.articles = result;
      }
    )
  }
}
