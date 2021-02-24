import { Component, Input, OnInit } from '@angular/core'

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

  constructor() {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavoritedsProps
  }

  handleLike(): void {
    if (this.isFavorited) {
      this.favoritesCount -= 1
    } else {
      this.favoritesCount += 1
    }

    this.isFavorited = !this.isFavorited
  }
}
