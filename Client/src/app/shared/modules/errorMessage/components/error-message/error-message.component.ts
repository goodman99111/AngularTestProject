import { Component, Input, OnInit } from '@angular/core';
import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-error-message',
  template: '<div>{{messageProps}}</div>'
})
export class ErrorMessageComponent implements OnInit {
  @Input('message') messageProps: BackandErrorsInterface | string = 'Somthing error message'

  constructor() { }

  ngOnInit(): void {
  }

}
