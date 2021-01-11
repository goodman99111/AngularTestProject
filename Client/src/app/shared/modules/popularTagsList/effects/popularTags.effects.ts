import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { PopularTagType } from 'src/app/shared/types/populatTagsType.type'
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
      switchMap(() => {
        return this.popularTags.getPopularTags().pipe(
          map((tags: PopularTagType[]) => {
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
