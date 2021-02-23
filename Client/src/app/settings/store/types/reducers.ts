import { state } from '@angular/animations'
import { Action, createReducer, on } from '@ngrx/store'
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/updateCurrentUser.action'
import { SettingsStateInterface } from './settingsState.interface'

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationsError: null,
}

const settingsReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
      validationsError: action.errors,
    })
  )
)

export function reducers(state: SettingsStateInterface, action: Action) {
  return settingsReducer(state, action)
}
