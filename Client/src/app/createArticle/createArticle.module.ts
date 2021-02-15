import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module'
import { CreateArticleComponent } from './components/create-article/create-article.component'
import { CreateArticleService } from './services/createArticle.service'
import { CreateArticleEffect } from './store/effects/createArticle.effect'
import { reducers } from './store/reducers'

const routes = [
  {
    path: 'article/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
