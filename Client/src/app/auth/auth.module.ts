import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module'

import { BackendErrorMessagesComponent } from '../shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component'
import { PersistanceService } from '../shared/services/persistance.service'
import { RegisterComponent } from './components/register/register.component'
import { AuthService } from './services/auth.service'
import { reducers } from './store/actions/reducer'
import { RegisterEffect } from './store/effects/register.effect'
import { LoginComponent } from './components/login/login.component'
import { LoginEffect } from './store/effects/login.effect'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
