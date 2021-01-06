import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { popularTagsStateInterface } from '../types/popularTagsState.interface'

export const popularTagsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  popularTagsStateInterface
>('popularTags')

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: popularTagsStateInterface) => tagsState.isLoading
)

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: popularTagsStateInterface) => tagsState.data
)

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: popularTagsStateInterface) => tagsState.error
)
