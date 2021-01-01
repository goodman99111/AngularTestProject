import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module'
import { FeedComponent } from '../shared/modules/feed/components/feed/feed.component'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { FeedService } from '../shared/modules/feed/services/feed.service'
import { GlobalFeedComponent } from './components/globalFeed/global-feed.component'

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule, BannerModule],
  declarations: [GlobalFeedComponent],
  providers: [FeedService],
})
export class GlobalFeedModule {}
