import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { PopularTagsListModule } from '../shared/modules/popularTagsList/popularTagsList.module'
import { FeedToggleModule } from '../shared/modules/feedToggler/feedToggler.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { TagFeedComponent } from './components/tag-feed/tag-feed.component'
import { RouterModule } from '@angular/router'

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
]

@NgModule({
  declarations: [TagFeedComponent],
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
export class TagFeedModule {}
