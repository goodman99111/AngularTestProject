import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { SettingsStateInterface } from './types/settingsState.interface'

export const settingsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SettingsStateInterface
>('settings')

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settignsState: SettingsStateInterface) => settignsState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settignsState: SettingsStateInterface) => settignsState.validationsError
)
