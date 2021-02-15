import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { ArticleInterface } from '../types/article.interface'
import { GetArticleResponceInterface } from '../types/getArticleResponce.interface'

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.authUrl}/articles/${slug}`

    return this.http.get<GetArticleResponceInterface>(fullUrl).pipe(
      map((responce: GetArticleResponceInterface) => {
        return responce.article
      })
    )
  }
}
