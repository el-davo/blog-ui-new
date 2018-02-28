import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserState } from '../user/user.state';
import { AppState } from '../root.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  user$: Observable<UserState>;

  constructor(private store: Store<AppState>) {
    this.user$ = store.select('user');
  }
}
