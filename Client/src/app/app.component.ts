import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { delay } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
