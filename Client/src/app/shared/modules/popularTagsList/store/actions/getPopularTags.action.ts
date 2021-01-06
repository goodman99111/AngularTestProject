import { createAction, props } from '@ngrx/store'
import { getPopularTagsResponceInterface } from '../../types/getPopularTagsResponce.interface'
import { ActionTypes } from '../actionTypes'

export const getPopularTagsAction = createAction(
  ActionTypes.GET_POPULAR_TAGS,
  props<{ url: string }>()
)

export const getPopularTagsActionSucccess = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ tags: getPopularTagsResponceInterface }>()
)

export const getPopularTagsActionFailure = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
)
