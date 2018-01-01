import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SideNavState} from './side-nav.state';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @select('sideNav') sideNav$: Observable<SideNavState>;

  constructor() {
  }

  ngOnInit() {
  }

}
