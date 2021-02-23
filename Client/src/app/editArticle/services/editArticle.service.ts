import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface'
import { SaveArticeResponceInterface } from 'src/app/shared/types/saveArticleResponce.interface'
import { environment } from 'src/environments/environment'

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    slug: string,
    aricleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.authUrl}/articles/${slug}`

    return this.http
      .put<SaveArticeResponceInterface>(fullUrl, aricleInput)
      .pipe(map((response: SaveArticeResponceInterface) => response.article))
  }
}
