import { createAction, props } from '@ngrx/store'
import { PopularTagType } from 'src/app/shared/types/populatTagsType.type'
import { ActionTypes } from '../actionTypes'

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS)

export const getPopularTagsActionSucccess = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ tags: PopularTagType[] }>()
)

export const getPopularTagsActionFailure = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
)
