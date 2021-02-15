import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface'
import { SaveArticeResponceInterface } from 'src/app/shared/types/saveArticleResponce.interface'
import { environment } from 'src/environments/environment'

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    aricleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.authUrl + '/articles'

    return this.http
      .post<SaveArticeResponceInterface>(fullUrl, aricleInput)
      .pipe(map((response: SaveArticeResponceInterface) => response.article))
  }
}
