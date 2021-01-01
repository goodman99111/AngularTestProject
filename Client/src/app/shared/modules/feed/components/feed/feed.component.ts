import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { environment } from 'src/environments/environment'

import { getFeedAction } from '../../store/actions/getFeed.action'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors'
import { GetFeedResponceInterface } from '../../types/getFeedResponce.interface'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  feed$: Observable<GetFeedResponceInterface | null>
  error$: Observable<string | null>
  limit = environment.limit
  baseUrl: string
  currentPage: number
  queryParamsSubscription: Subscription

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
    this.initializeListeners()
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params.page || '1')
      }
    )
  }
}
