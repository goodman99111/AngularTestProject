import { createAction } from '@ngrx/store'
import { ActionsTypes } from '../actionTypes'

export const logoutAction = createAction(ActionsTypes.LOGOUT)
