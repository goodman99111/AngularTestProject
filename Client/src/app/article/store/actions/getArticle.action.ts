import { createAction, props } from '@ngrx/store'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { ActionsTypes } from '../actionTypes'

export const getArticleAction = createAction(
  ActionsTypes.GET_ARTICLE,
  props<{ slug: string }>()
)

export const getArticleSuccessAction = createAction(
  ActionsTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const getArticleFailureAction = createAction(
  ActionsTypes.GET_ARTICLE_FAILURE
)
