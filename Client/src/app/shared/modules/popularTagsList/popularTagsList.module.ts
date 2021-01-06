import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopularTagsListComponent } from './components/popular-tags-list/popular-tags-list.component'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { PopularTagsService } from './services/popularTags.service'
import { EffectsModule } from '@ngrx/effects'
import { GetPopularTagsEffect } from './effects/popularTags.effects'
import { LoadingModule } from '../loading/loading.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [PopularTagsListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    RouterModule,
  ],
  exports: [PopularTagsListComponent],
  providers: [PopularTagsService],
})
export class PopularTagsListModule {}
