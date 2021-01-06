import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { FeedService } from '../shared/modules/feed/services/feed.service'
import { PopularTagsListModule } from '../shared/modules/popularTagsList/popularTagsList.module'
import { GlobalFeedComponent } from './components/globalFeed/global-feed.component'

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsListModule,
  ],
  declarations: [GlobalFeedComponent],
  providers: [FeedService],
})
export class GlobalFeedModule {}
