export class ArticleFilter{
    _sort: string;
    _order: string;

    constructor(){
        this._order = "asc";
        this._sort = "title"
    }
}