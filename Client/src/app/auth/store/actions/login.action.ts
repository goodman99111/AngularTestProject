import { createAction, props } from '@ngrx/store'

import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { LoginRequestInterface } from '../../types/loginRequest.interface'

import { ActionsTypes } from '../actionTypes'

export const loginAction = createAction(
  ActionsTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
)

export const loginSuccessAction = createAction(
  ActionsTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const loginFailureAction = createAction(
  ActionsTypes.LOGIN_FAILURE,
  props<{ errors: BackandErrorsInterface }>()
)
