import { createAction, props } from '@ngrx/store'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface'
import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { SaveArticeResponceInterface } from 'src/app/shared/types/saveArticleResponce.interface'
import { ActionTypes } from '../actionsTypes'

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
)

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackandErrorsInterface }>()
)
