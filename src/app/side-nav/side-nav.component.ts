import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SideNavState } from './side-nav.state';
import { AppState } from '../root.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  sideNav$: Observable<SideNavState>;

  constructor(private store: Store<AppState>) {
    this.sideNav$ = store.select('sideNav');
  }

  ngOnInit() {
  }

}
