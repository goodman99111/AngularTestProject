import { createAction, props } from '@ngrx/store'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { LoginRequestInterface } from '../../types/loginRequest.interface'
import { ActionsTypes } from '../actionTypes'

export const getCurrentUserAction = createAction(ActionsTypes.GET_CURRENT_USER)

export const getCurrentUserSuccessAction = createAction(
  ActionsTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const getCurrentUserFailureAction = createAction(
  ActionsTypes.GET_CURRENT_USER_FAILURE
)
