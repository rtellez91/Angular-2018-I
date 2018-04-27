import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  article : Article;

  constructor(private articleService : ArticlesService, private router: Router) {
    this.article = new Article("", "");
  }

  ngOnInit() {
  }

  save() : void{
    console.log("save");
    this.articleService.addArticle(this.article).subscribe(
      result => {
        this.router.navigate([""]);
      }
    );
  }

}
