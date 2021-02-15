import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { GetArticleEffect } from './store/effects/getArticle.effect'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/actions/reducer'
import { RouterModule } from '@angular/router'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'
import { ArticleComponent } from './components/article/article.component'
import { LoadingComponent } from '../shared/modules/loading/components/loading/loading.component'
import { LoadingModule } from '../shared/modules/loading/loading.module'
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module'
import { TagListModule } from '../shared/modules/tagList/tagList.module'
import { ArticleService } from './service/article.service'
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect'

const routs = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routs),
    LoadingModule,
    BackendErrorMessagesModule,
    TagListModule,
  ],

  exports: [],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
