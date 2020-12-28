import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { ReducerManager, StoreModule } from '@ngrx/store'
import { FeedComponent } from './components/feed/feed.component'
import { GetFeedEffect } from './effects/getFeed.effect'
import { FeedService } from './services/feed.service'
import { reducers } from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
