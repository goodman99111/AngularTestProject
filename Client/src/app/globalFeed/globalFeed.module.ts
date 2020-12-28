import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
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
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule],
  declarations: [GlobalFeedComponent],
  providers: [FeedService],
})
export class GlobalFeedModule {}
