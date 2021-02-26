import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { addToFavoritesAction } from '../../store/actions/addToFavorites.action'

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorited') isFavoritedsProps: boolean
  @Input('favoritesCount') favoritesCountProps: number
  @Input('articleSlug') articleSlugProps: string

  favoritesCount: number
  isFavorited: boolean

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavoritedsProps
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      })
    )

    if (this.isFavorited) {
      this.favoritesCount -= 1
    } else {
      this.favoritesCount += 1
    }

    this.isFavorited = !this.isFavorited
  }
}
