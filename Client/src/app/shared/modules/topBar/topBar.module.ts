import { CommonModule } from '@angular/common'
import { NgModule, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { CurrentUserInterface } from '../../types/currentUser.interface'
import { TopBarComponent } from './components/top-bar/top-bar.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
