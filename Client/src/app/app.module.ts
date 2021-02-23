import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from 'src/app/auth/auth.module'

import { environment } from '../environments/environment'
import { EffectsModule } from '@ngrx/effects'
import { TopBarModule } from './shared/modules/topBar/topBar.module'
import { PersistanceService } from './shared/services/persistance.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './shared/services/authinterceptor.service'
import { GlobalFeedModule } from './globalFeed/globalFeed.module'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { PopularTagsListComponent } from './shared/modules/popularTagsList/components/popular-tags-list/popular-tags-list.component'
import { YourFeedModule } from './yourFeed/yourFeed.module'
import { TagFeedModule } from './tagFeed/tagFeed.module'
import { ArticleModule } from './article/Articel.module'
import { CreateArticleModule } from './createArticle/createArticle.module'
import { EditArticleModule } from './editArticle/editArticle.module'
import { SettingsModule } from './settings/settings.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    StoreRouterConnectingModule.forRoot(),
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
    EditArticleModule,
    SettingsModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
