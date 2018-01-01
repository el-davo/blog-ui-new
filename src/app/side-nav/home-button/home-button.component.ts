import {Component} from '@angular/core';
import {SideNavActions} from '../side-nav.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {

  constructor(private actions: SideNavActions) {
  }

  @dispatch()
  closeSideNav() {
    return this.actions.hide();
  }
}
