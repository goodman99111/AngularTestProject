import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface'
import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { createArticleAction } from '../../store/actions/createArticle.action'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }

  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackandErrorsInterface | null>

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }))
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
}
