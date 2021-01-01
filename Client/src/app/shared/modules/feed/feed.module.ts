import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { ReducerManager, StoreModule } from '@ngrx/store'
import { ErrorMessageModule } from '../errorMessage/errorMessage.module'
import { LoadingModule } from '../loading/loading.module'
import { FeedComponent } from './components/feed/feed.component'
import { GetFeedEffect } from './effects/getFeed.effect'
import { FeedService } from './services/feed.service'
import { reducers } from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}