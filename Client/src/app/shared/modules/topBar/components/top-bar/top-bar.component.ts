import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import {
  currentUserSelector,
  isAnonymousSelector,
  isLogedInSelector,
} from 'src/app/auth/store/selectors'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'mc-topBar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLogedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLogedIn$ = this.store.pipe(select(isLogedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
