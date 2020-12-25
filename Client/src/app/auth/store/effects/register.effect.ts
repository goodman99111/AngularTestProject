import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { AuthService } from '../../services/auth.service'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({ currentUser })
          }),
          catchError((errorResponce: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponce.error.errors })
            )
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
