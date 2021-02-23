import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module'
import { LoadingModule } from '../shared/modules/loading/loading.module'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'
import { EditArticleComponent } from './components/edit-article/edit-article.component'
import { EditArticleService } from './services/editArticle.service'
import { GetArticleEffect } from './store/effects/getArticle.effect'
import { UpdateArticleEffect } from './store/effects/updateArticle.effect'
import { reducers } from './store/reducers'

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    ArticleFormModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
