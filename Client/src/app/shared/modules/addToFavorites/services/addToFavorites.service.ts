import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { GetArticleResponceInterface } from 'src/app/shared/types/getArticleResponce.interface'
import { environment } from 'src/environments/environment'

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)

    return this.http.post(url, {}).pipe(map(this.getArticle))
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)

    return this.http.delete(url).pipe(map(this.getArticle))
  }

  getUrl(slug: string): string {
    return `${environment.authUrl}/articles/${slug}/favorite`
  }

  getArticle(responce: GetArticleResponceInterface): ArticleInterface {
    return responce.article
  }
}