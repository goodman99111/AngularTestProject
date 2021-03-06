import { ArticleStateInterface } from 'src/app/article/types/articleState.interface'
import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import { CreateArticleStateInterface } from 'src/app/createArticle/types/createArticleState.interface'
import { EditArticleStateInterface } from 'src/app/editArticle/types/editArticleState.interface'
import { SettingsStateInterface } from 'src/app/settings/store/types/settingsState.interface'
import { FeedStateInterface } from '../modules/feed/types/feedState.interface'
import { popularTagsStateInterface } from '../modules/popularTagsList/types/popularTagsState.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  popularTags: popularTagsStateInterface
  article: ArticleStateInterface
  createArticle: CreateArticleStateInterface
  editArticle: EditArticleStateInterface
  settings: SettingsStateInterface
}
