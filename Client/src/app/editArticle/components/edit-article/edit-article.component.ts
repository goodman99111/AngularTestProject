import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface'
import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { getArticleAction } from '../../store/actions/getArticle.action'
import { updateArticleAction } from '../../store/actions/updateArticle.action'
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  slug: string

  isSubmitting$: Observable<boolean>
  isLoading$: Observable<boolean>
  backendErrors$: Observable<BackandErrorsInterface | null>
  initialValues$: Observable<ArticleInputInterface>

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }))
  }

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')

    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        }
      })
    )

    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }
}
