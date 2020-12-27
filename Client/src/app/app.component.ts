import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { delay } from 'rxjs/operators'
import { getCurrentUserAction } from './auth/store/actions/getCurrentUser.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction())
  }
}
