import { Component, Input, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { PopularTagType } from 'src/app/shared/types/populatTagsType.type'
import { environment } from 'src/environments/environment'
import { getPopularTagsAction } from '../../store/actions/getPopularTags.action'
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../../store/selectors'
import { getPopularTagsResponceInterface } from '../../types/getPopularTagsREsponce.interface'
import { popularTagsStateInterface } from '../../types/popularTagsState.interface'

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags-list.component.html',
  styleUrls: ['./popular-tags-list.component.scss'],
})
export class PopularTagsListComponent implements OnInit {
  apiUrl = environment.authUrl
  isLoading$: Observable<boolean>
  popularTags$: Observable<PopularTagType[] | null>
  errors$: Observable<string | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchPopularTags()
    this.initializeValues()
  }

  fetchPopularTags(): void {
    this.store.dispatch(getPopularTagsAction())
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.errors$ = this.store.pipe(select(errorSelector))
  }
}
