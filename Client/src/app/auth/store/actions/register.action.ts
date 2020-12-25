import { createAction, props } from '@ngrx/store'

import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'

import { ActionsTypes } from '../actionTypes'

export const registerAction = createAction(
  ActionsTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)

export const registerSuccessAction = createAction(
  ActionsTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailureAction = createAction(
  ActionsTypes.REGISTER_FAILURE,
  props<{ errors: BackandErrorsInterface }>()
)
