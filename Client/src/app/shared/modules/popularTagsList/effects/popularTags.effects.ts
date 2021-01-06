import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { PopularTagsService } from '../services/popularTags.service'
import {
  getPopularTagsAction,
  getPopularTagsActionFailure,
  getPopularTagsActionSucccess,
} from '../store/actions/getPopularTags.action'
import { getPopularTagsResponceInterface } from '../types/getPopularTagsREsponce.interface'

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(({ url }) => {
        return this.popularTags.getPopularTags(url).pipe(
          map((tags: getPopularTagsResponceInterface) => {
            return getPopularTagsActionSucccess({ tags })
          }),
          catchError(() => {
            return of(getPopularTagsActionFailure())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private popularTags: PopularTagsService
  ) {}
}
