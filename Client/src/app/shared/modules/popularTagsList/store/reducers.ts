import { Action, createReducer, on } from '@ngrx/store'
import { popularTagsStateInterface } from '../types/popularTagsState.interface'
import {
  getPopularTagsAction,
  getPopularTagsActionSucccess,
} from './actions/getPopularTags.action'

const initialState: popularTagsStateInterface = {
  isLoading: false,
  data: null,
  error: null,
}

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): popularTagsStateInterface => ({ ...state, isLoading: true })
  ),
  on(
    getPopularTagsActionSucccess,
    (state, action): popularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.tags,
    })
  ),
  on(
    getPopularTagsAction,
    (state): popularTagsStateInterface => ({ ...state, isLoading: false })
  )
)

export function reducers(state: popularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
