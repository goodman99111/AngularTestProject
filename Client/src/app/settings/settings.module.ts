import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SettingsComponent } from './components/settings/settings.component'
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/types/reducers'
import { ReactiveFormsModule } from '@angular/forms'

const routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
