import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { AuthStateInterface } from '../types/authState.interface'

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)

export const isLogedInSelector = createSelector(
  authFeatureSelector,
  (authstate: AuthStateInterface) => authstate.isLoggedIn
)

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authstate: AuthStateInterface) => authstate.isLoggedIn === false
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authstate: AuthStateInterface) => authstate.currentUser
)
