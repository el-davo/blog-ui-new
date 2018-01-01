import {Component} from '@angular/core';
import {SideNavActions} from '../../side-nav/side-nav.actions';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @select(['sideNav', 'showSideNav']) showSideNav$: Observable<boolean>;

  constructor(private actions: SideNavActions) {
  }

  @dispatch()
  showSideNav() {
    return this.actions.show();
  }

  @dispatch()
  hideSideNav() {
    return this.actions.hide();
  }
}
