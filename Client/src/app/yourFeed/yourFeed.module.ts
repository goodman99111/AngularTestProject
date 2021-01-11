import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { YourFeedComponent } from './components/your-feed/your-feed.component'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { PopularTagsListModule } from '../shared/modules/popularTagsList/popularTagsList.module'
import { FeedToggleModule } from '../shared/modules/feedToggler/feedToggler.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { RouterModule } from '@angular/router'

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    PopularTagsListModule,
    FeedToggleModule,
    FeedModule,
  ],
  exports: [],
  providers: [],
})
export class YourFeedModule {}
