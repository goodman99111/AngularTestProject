import { createAction, props } from '@ngrx/store'
import { ActionsTypes } from '../actionTypes'

export const deleteArticleAction = createAction(
  ActionsTypes.DELETE_ARTICLE,
  props<{ slug: string }>()
)

export const deleteArticleSuccessAction = createAction(
  ActionsTypes.DELETE_ARTICLE_SUCCESS
)

export const deleteArticleFailureAction = createAction(
  ActionsTypes.DELETE_ARTICLE_FAILURE
)
